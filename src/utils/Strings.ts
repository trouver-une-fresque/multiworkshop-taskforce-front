export class Strings {
  public static padLeft(value: number, size: number, filler: string) {
    const padSize = size - ('' + value).length
    let pad = ''
    for (let i = 0; i < padSize; i += filler.length) {
      pad += filler
    }
    return pad + value
  }

  public static plural(
    value: number | null | undefined,
    pluralForm: string = 's'
  ) {
    return value && value > 1 ? pluralForm : ''
  }

  static upperFirst(str: string) {
    if (!str) {
      return ''
    }
    return str[0].toUpperCase() + str.substring(1)
  }

  // FIXME move to dedicated component
  static toNormalizedPhoneNumber(phoneNumber: string | undefined) {
    if (phoneNumber === undefined) {
      return undefined
    }

    let normalizedPhoneNumber = phoneNumber!
    const formatInternational = normalizedPhoneNumber.indexOf('+') === 0
    // Removing non-chars
    normalizedPhoneNumber = normalizedPhoneNumber.replace(/[.\s]/gi, '')
    if (formatInternational) {
      normalizedPhoneNumber = `0${normalizedPhoneNumber.substring(normalizedPhoneNumber.length - 9, normalizedPhoneNumber.length)}`
    }

    normalizedPhoneNumber = [
      normalizedPhoneNumber[0],
      normalizedPhoneNumber[1],
      ' ',
      normalizedPhoneNumber[2],
      normalizedPhoneNumber[3],
      ' ',
      normalizedPhoneNumber[4],
      normalizedPhoneNumber[5],
      ' ',
      normalizedPhoneNumber[6],
      normalizedPhoneNumber[7],
      ' ',
      normalizedPhoneNumber[8],
      normalizedPhoneNumber[9],
    ].join('')

    return normalizedPhoneNumber
  }

  // FIXME move to router
  public static toReadableURLPathValue(value: string) {
    return value
      .toLowerCase()
      .replace(/[-\s']/gi, '_')
      .replace(/[èéëêêéè]/gi, 'e')
      .replace(/[áàâäãåâà]/gi, 'a')
      .replace(/[çç]/gi, 'c')
      .replace(/[íìîï]/gi, 'i')
      .replace(/[ñ]/gi, 'n')
      .replace(/[óòôöõô]/gi, 'o')
      .replace(/[úùûüûù]/gi, 'u')
      .replace(/[œ]/gi, 'oe')
  }

  public static toFullTextNormalized(value: string) {
    // /!\ important note : this method is shared between the communes-import.ts tooling file
    // and Autocomplete.ts. The Commune lists are hence pre-computed and then fetched using
    // normalized prefixes that were created using this method.
    // Hence its extraction into a reusable/shareable mjs file
    return value
      .toLowerCase()
      .trim()
      .replace(/[-\s']/gi, '_')
      .replace(/[èéëêêéè]/gi, 'e')
      .replace(/[áàâäãåâà]/gi, 'a')
      .replace(/[çç]/gi, 'c')
      .replace(/[íìîï]/gi, 'i')
      .replace(/[ñ]/gi, 'n')
      .replace(/[óòôöõô]/gi, 'o')
      .replace(/[úùûüûù]/gi, 'u')
      .replace(/[œ]/gi, 'oe')
  }
}
