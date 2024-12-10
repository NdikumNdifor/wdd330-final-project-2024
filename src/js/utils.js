/* eslint-env browser */

// Selects an element on the DOM.
export function getElement(selector) {
  return document.querySelector(selector);
}

// Displays a dynamic header and footer.
export async function loadHeaderFooter() {
  const header = getElement("#main-header");
  const footer = getElement("#main-footer");
  const headerPath = "../partials/header.html";
  const footerPath = "../partials/footer.html";

  const promises = [];
  promises.push(renderWithTemplate(loadTemplate, header, headerPath));
  promises.push(renderWithTemplate(loadTemplate, footer, footerPath));
  await Promise.all(promises);
}

// Make use of a template function and renders html.
export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  position = "afterbegin",
  clear = false,
) {
  if (clear) parentElement.innerHTML = "";
  const htmlStrings = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlStrings.innerHTML);
}

// Accepts text or html data sorce and creates a
// html template to load the data.
export async function loadTemplate(path) {
  const res = await fetch(path);
  const html = await res.text();
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export function renderListWithTemplate(
  templateFn,
  list,
  parentElement,
  position = "afterBegin",
  clear = false,
) {
  if (clear) parentElement.innerHTML = "";
  const htmlItems = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlItems);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(param);
  return parameter;
}

export function getLocalStorage(key){
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data){
  return localStorage.setItem(key, JSON.stringify(data))
}
