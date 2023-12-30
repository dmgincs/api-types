
export class RegisterMobileDeviceRequestDto {

    token: string;

    authToken: string;

    notificationToken: string;

    operatingSystem: string;

    osVersion: string | null;

    model: string;
}
