import frappe
from frappe import _

from frappe.handler import upload_file


@frappe.whitelist()
def custom_file_uploader():
    return upload_file()
