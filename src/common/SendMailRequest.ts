import { MailTemplateNames } from '~/types/mail/MailTemplates';

export class SendMailRequestDto {

    mailType: MailTemplateNames;

    to: string;

    from: string;

    subject: string;

    message: string[];
}
