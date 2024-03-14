import { KeyValueString } from '../../types';

export const UI_API_BASE = 12;

export const WidgetWidth = 360;
export const WidgetHeight = 200;

export const DefaultWidgets = [
  {
    wid: 'embed-01'
  },
  {
    wid: 'rssreader-01'
  },
  {
    wid: 'lofi-01'
  },
  {
    wid: 'note-01'
  },
  {
    wid: 'analogclock-01'
  }
];
export const DefaultLayout = [
  { i: 'embed-01', x: 0, y: 0, w: 1, h: 2 },
  { i: 'rssreader-01', x: 1, y: 0, w: 1, h: 2 },
  { i: 'lofi-01', x: 2, y: 0, w: 1, h: 1 },
  { i: 'note-01', x: 0, y: 1, w: 1, h: 1 },
  { i: 'analogclock-01', x: 2, y: 1, w: 1, h: 1 },
];
