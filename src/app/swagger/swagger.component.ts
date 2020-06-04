import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.css']
})
export class SwaggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: 'http://rackerlabs.github.io/wadl2swagger/openstack/swagger/dbaas.json',
      // docExpansion: 'none',
      // operationsSorter: 'alpha'
    });
  }

}
