```js
  // app.component.ts
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: (currentUser) => {
        this.socketService.setupSocketConnection(currentUser);
   /********* socket.service.ts ********* */
  setupSocketConnection(currentUser: CurrentUserInterface): void {
    this.socket = io(environment.socketUrl, {
      auth: {
        token: currentUser.token,
      },
    });
  }
  ##########################
  // board.component.ts
    ngOnInit(): void {
    this.socketService.emit(SocketEventsEnum.boardsJoin, {
      boardId: this.boardId,
    });
    this.fetchData();
    this.initializeListeners();
  }
  /****socket.service.ts**** */
    emit(eventName: string, message: any): void {
    if (!this.socket) {
      throw new Error('Socket connection is not established');
    }
    this.socket.emit(eventName, message);
  }
  ############# Service  ###############
  /*******server.ts****** */
      socket.on(SocketEventsEnum.boardsJoin, (data) => {
        console.log("boardsJoin-57", data);
        boardsController.joinBoard(io, socket, data);
    });
    /*******boards.controller.ts****** */
    export const joinBoard = (
    io: Server,
    socket: Socket,
    data: { boardId: string }
) => {
    console.log("server socket io join", socket.user);
    socket.join(data.boardId);
};
  ##########################
```
