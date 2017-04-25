import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summery'
})

export class SummaryPipe implements PipeTransform {
    endSummary = "...";
    delemiter = " ";

    transform(value: string, args: string[]): string {
        if (value) {

            var wordsCount = args && args.length > 0 ?
                wordsCount = parseInt(args[0]) : 10;

            var words = value.split(this.delemiter);
            var sentence = " ";

            if (words.length <= wordsCount)
                return value;

            for (var i = 0; i < wordsCount; i++) {
                sentence = sentence.concat(words[i] + this.delemiter);
            }

            return sentence.concat(this.endSummary);
        }
    }
}