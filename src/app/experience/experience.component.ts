import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CdkAccordionModule,
    MatIconModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  items = [
    'Software Engineer | Vizient Inc. | June 2021 - Present', 
    'Computer Systems Manager | Trading Post Solutions | November 2015 – July 2017', 
    'Operations Specialist | Unigroup Inc | Summer 2019 - Summer 2020'
  ];
  expandedIndex = 0;
  descriptions = [
    '● Full-stack Developer utilizing Agile methodology with daily expertise in Angular, Java, and SQL.\n' +
    '● Develop advanced contract activation program enabling users to create, manage, and review contracts through file uploads or manual input.\n' +
    '● Implement features such as complex user eligibility processes, contract grouping, bulk uploading, and a report generator. \n● Contribute to a data unification project using Databricks, PySpark, PowerBi, and DAX.\n' + 
    '● Collaborate at the pod level as an application operator, assisting teams in setting up and maintaining Pulumi and Azure environments.', 
    
    '● Programmed, designed, and maintained eCommerce-enabled customer websites for product sales.\n' +
    '● Collaborated closely with sales and production teams to ensure the websites were user-friendly, aesthetically appealing, and accurately presented all products, prices, and logos.\n' +
    '● Utilized HTML5 and CSS to create custom merchandise-selling websites for clients.', 

    '● Assisted as a peak-season last line of defense system to safeguard against delays in high-risk orders, ensuring the timely arrival of freight and customer satisfaction.\n' +
    '● Coordinated shipment logistics by liaising agents for the loading and unloading of challenging freight'
  ]

  toggleAccordion(index: number) {
    return this.descriptions[index];
  }

}
