import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { User, UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  user: User = {
    email: 'test',
    password: 'test',
    nom: 'test'
  };
 
  userId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, 
    private userService: UserServiceService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId)  {
      this.loadUser();
    }
  }

  async loadUser() {
    const loading = await this.loadingController.create({
      message: 'Loading User..'
    });
    await loading.present();
 
    this.userService.getUser(this.userId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }

  async saveUser() {
 
    const loading = await this.loadingController.create({
      message: 'Saving User..'
    });
    await loading.present();
 
    if (this.userId) {
      this.userService.updateUser(this.user, this.userId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    } else {
      this.userService.addUser(this.user).then(() => {
        loading.dismiss();
        this.nav.navigateBack('home');
      });
    }
  }

}
