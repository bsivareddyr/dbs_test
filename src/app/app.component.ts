import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  users: any = [];
  name: String;
  username: String;
  email: any;
  street: any;
  suite: any;
  city: any;
  zipcode: any;
  lat: any;
  lng: any;
  phone: Number;
  website: any;
  cname: any;
  catchPhrase: any;
  bs: any;
  id: any;
  enablebtn: boolean;
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUserdata();
  }
  getUserdata() {
    this.userService.getuserDetails().subscribe(res => {
      this.users = res;
      $(document).ready( function () {
        $('#myTable').DataTable({
          "retrieve": true
        });
    });
    }, err => {
      console.log(err);
    })
  }
  saveuserdata() {
    const obj = {
      name: this.name,
      username: this.username,
      email: this.email,
      address: {
        street: this.street,
        suite: this.suite,
        zipcode: this.zipcode,
        city: this.city,
        geo: {
          lat: this.lat,
          lng: this.lng,
        }
      },
      phone: this.phone,
      website: this.website,
      company: {
        cname: this.cname,
        catchPhrase: this.catchPhrase,
        bs: this.bs
      }
    }
    this.userService.addUserInfo(obj).subscribe(res => {
      if (res) {
        this.getUserdata()
      }
    }, err => {
      console.log(err);
    })
  }
  deleteUserInfo(e) {
    this.userService.deleteUser(e.id).subscribe(res => {
      // if (res) {
        this.getUserdata()
      // }
    }, err => {
      console.log(err);
    })
  }
  updateInfo(event) {
    this.id = event.id;
    this.enablebtn = true;
    this.name = event.name;
    this.username = event.username;
    this.email = event.email;
    this.street = event.address.street;
    this.suite = event.address.suite;
    this.city = event.address.city;
    this.zipcode = event.address.zipcode;
    this.lat = event.address.geo.lat;
    this.lng = event.address.geo.lng;
    this.phone = event.phone;
    this.website = event.website;
    this.cname = event.company.name;
    this.catchPhrase = event.company.catchPhrase;
    this.bs = event.company.bs
    console.log(event)
  }
  updateuserdata() {
    const obj = {
      name: this.name,
      username: this.username,
      email: this.email,
      address: {
        street: this.street,
        suite: this.suite,
        zipcode: this.zipcode,
        city: this.city,
        geo: {
          lat: this.lat,
          lng: this.lng,
        }
      },
      phone: this.phone,
      website: this.website,
      company: {
        cname: this.cname,
        catchPhrase: this.catchPhrase,
        bs: this.bs
      }
    }
    this.userService.updateUserInfo(obj, this.id).subscribe(res => {
      if (res) {
        this.getUserdata()
      }
    }, err => {
      console.log(err);
    })
  }
}

