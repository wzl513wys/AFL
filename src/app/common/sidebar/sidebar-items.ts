// export interface sidebarItem {
//   name: string;
//   url: string;
//   icon: any;
// }

export class sidebarItem {
  name: string;
  url: string;
  icon: any;

  constructor(name, url, icon) {
    this.name = name;
    this.url = url;
    this.icon = icon;
  }
}

