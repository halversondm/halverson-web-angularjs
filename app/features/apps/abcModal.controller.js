/**
 * Created by Daniel on 1/27/2016.
 */
"use strict";

class AbcModalController {

  constructor($uibModalInstance, $sce, messages, html) {
    this.modalInstance = $uibModalInstance;
    this.messages = messages;
    this.html = html;
    this.phpHtml = $sce.trustAsHtml(html);
  }
}
AbcModalController.$inject = ["$uibModalInstance", "$sce", "messages", "html"];

export default AbcModalController;
