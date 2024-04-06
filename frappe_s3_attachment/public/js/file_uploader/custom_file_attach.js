frappe.ui.form.ControlAttach = class CustomControlAttach extends frappe.ui.form.ControlAttach {
	set_upload_options() {
		let options = {
			allow_multiple: false,
			on_success: (file) => {
				this.on_upload_complete(file);
				this.toggle_reload_button();
			},
			restrictions: {},
		};
		if (this.frm) {
			options.doctype = this.frm.doctype;
			options.docname = this.frm.docname;
			options.fieldname = this.df.fieldname;
			options.make_attachments_public = this.frm.meta.make_attachments_public;
			options.frm = this.frm;
			// Override with custom fields to be shown by setting options.frm.custom_s42_upload_fields
		}

		if (this.df.options) {
			Object.assign(options, this.df.options);
		}
		this.upload_options = options;
	}

	on_attach_click() {
		this.set_upload_options();
		this.file_uploader = new frappe.ui.FileUploader(this.upload_options);
	}
}