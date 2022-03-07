import { renderTemplate, RenderPosition } from './render.js';
import { createSiteMenuTemplate } from './view/site-menu-view.js';
import { createFilterTemplate } from './view/filter-view.js';
import { createSortTemplate } from './view/sort-view.js';
import { createFormCreateTemplate } from './view/form-create-view.js';
import { createFormEditTemplate } from './view/form-edit-view.js';
import { createDestinationPointTemplate } from './view/destination-point-view.js';
import { createEventListTemplate } from './view/event-list-view.js';
import { generateDestPoint } from './mock/destinationPoint.js';
import { sortPoints } from './utils.js';

const POINT_COUNT = 20;
const points = sortPoints(Array.from({ length: POINT_COUNT }, generateDestPoint));

const siteMenuElement = document.querySelector('.trip-controls__navigation');
const filterElement = document.querySelector('.trip-controls__filters');

renderTemplate(siteMenuElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filterElement, createFilterTemplate(), RenderPosition.BEFOREEND);

const tripEventsElement = document.querySelector('.trip-events');

renderTemplate(tripEventsElement, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(tripEventsElement, createEventListTemplate(), RenderPosition.BEFOREEND);

const eventListElement = tripEventsElement.querySelector('.trip-events__list');

renderTemplate(eventListElement, createFormCreateTemplate(), RenderPosition.BEFOREEND);
renderTemplate(eventListElement, createFormEditTemplate(), RenderPosition.BEFOREEND);

for (let point of points) {
  renderTemplate(eventListElement, createDestinationPointTemplate(point), RenderPosition.BEFOREEND);
}
