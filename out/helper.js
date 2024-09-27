function get_id(id) {
    return document.getElementById(id);
}
function get_query(what) {
    return document.querySelector(what);
}
function create_el(el) {
    return document.createElement(el);
}
function set_el_text_content(el, str) {
    el.textContent = str;
}
function set_page_title(str) {
    document.title = "filipryan.dev | " + str;
}
function uppercaseify_string(str) {
    let parts = str.split(" ");
    parts.forEach((part, index) => {
        parts[index] = uppercaseify(part);
    });
    return parts.join(" ");
}
function uppercaseify(str) {
    let firstChar = str.charAt(0);
    if (firstChar !== firstChar.toUpperCase()) {
        str = str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
}
export { get_id, get_query, create_el, set_el_text_content, set_page_title, uppercaseify, uppercaseify_string, };
//# sourceMappingURL=helper.js.map