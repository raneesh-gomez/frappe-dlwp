frappe.pages["dreamlink-web-portal"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Dreamlink Web Portal"),
		single_column: true,
	});
};

frappe.pages["dreamlink-web-portal"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("dreamlink_web_portal.bundle.jsx").then(() => {
		frappe.dreamlink_web_portal = new frappe.ui.DreamlinkWebPortal({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}