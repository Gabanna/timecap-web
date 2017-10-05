import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import 'moment/locale/de';

moment.locale('de');

@Pipe({name: 'dateLabel'})
export class DateLabelPipe implements PipeTransform {

    transform(date: Date, calendarMode: any): string{
        var result = 'not defined';
        var toFormat = moment(date);
        switch(calendarMode) {
            case 'day': 
              result = toFormat.format('DD. MMMM YYYY');
            break;
            case 'week':
            result = toFormat.format('ww. [KW] YYYY');
            break;
            case 'month': 
                result = toFormat.format('MMMM YY');
            break;
        }

        return result;
    }
}