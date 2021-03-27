# React Hook Form Chakra Fields

A collection of form fields on top of simple and accessible react component library [Chakra UI](https://chakra-ui.com/) and performant form library [React Hook Form](https://react-hook-form.com/), integrated with many other js/ts libraries.

### Included inputs and form fields:
- `Input Field` - standard input field
- `Masked Input Field` - input field with the ability to set any mask you want for example phone or time
- `Money Field` - input field intended for monetary values (you can easily extend it with for example currency select)
- `Select Field` - advanced select field on top of powerful react-select library
- `Date Field` - standard date select field on top of react-datepicker library
- `DateTimeField` - date select field integrated with additional input for providing a specific time
- `DateTimeOnlyField` - time field for time value only

All components are accessible (thanks Chakra UI!) and have support for chakra UI dark mode.

## Installation

You need to install all below-mentioned libraries as a peer dependencies of this package.
- [React Hook Form](https://react-hook-form.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Currency.js](https://currency.js.org/)
- [Day.js](https://day.js.org/)
- [React Datepicker](https://reactdatepicker.com/)
- [React Number Format](https://github.com/s-yadav/react-number-format#readme)
- [React Select](https://react-select.com/)
- [React Text Mask](https://openbase.com/js/react-text-mask)

```
yarn add react-hook-form chakra-ui/react chakra-ui/icons @emotion/react @emotion/styled framer-motion currency.js dayjs react-datepicker react-number-format react-select react-text-mask
yarn add -D @types/react-datepicker @types/react-text-mask @types/react-select
yarn add react-hook-form-chakra-fields
```

## Usage Examples - TODO

You can always check [this project repository](https://github.com/bartstc/booking-app/tree/master/employee-web-client) to see how to use this library.

## Meta

This library was invented with [TSDX](https://tsdx.io/).