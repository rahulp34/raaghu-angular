import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompUserBasicsComponent } from './rds-comp-user-basics.component';

export default {
  title: 'Components/User Basics',
  component: RdsCompUserBasicsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompUserBasicsComponent> = (args: RdsCompUserBasicsComponent) => ({
  props: {
    ...args
  }
});

export const basic = Template.bind({});
basic.args = {
  userData: [{
    emailAddress: "admin@aspnetzero.com",
    id: 1,
    isActive: true,
    isLockoutEnabled: true,
    isTwoFactorEnabled: true,
    name: "admin",
    password: null,
    phoneNumber: null,
    shouldChangePasswordOnNextLogin: false,
    surname: "admin",
    userName: "admin",
  }]
}

