import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class FooterService {

    footerEmitter = new EventEmitter<boolean>();

    fixFooter(fix: boolean) {

        this.footerEmitter.emit(fix);

    }

}
