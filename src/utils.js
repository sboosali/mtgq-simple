/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import 'Intl';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const AmericanEnglishPluralRules = new Intl.PluralRules('en-US');

//

/*
 * e.g. pluralizeEnglish(1, "card")
 *   → "card"
 *
 * e.g. pluralizeEnglish(7, "card")
 *   → "cards"
 *
 * e.g. pluralizeEnglish(1, "mox", oxen")
 *   → "mox"
 *
 * e.g. pluralizeEnglish(5, "mox", "moxen")
 *   → "moxen"
 *
 */
function pluralizeEnglish(count, singular, plural = (singular + "s") {

  switch (AmericanEnglishPluralRules.select(count)) {

    case 'other':
      return plural;
 
    case 'one':
    default:
      return singular;

}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
