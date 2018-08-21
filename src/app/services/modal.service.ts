export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  open(id: string) {
    // open modal specified by id
    const modal: any = this.modals.filter(x => x.id === id)[0];
    // When the modal is created (onInit), it is added to the service Modals Array, so it knows about it
    modal.open();
  }

  close(id: string) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
