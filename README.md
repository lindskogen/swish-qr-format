# Swish QR format

There are four different types of codes. They all start with a letter to signify what type of code it is.

## Code types

### Type A
Pay to a swish number.

#### Format:

`A` `<swish number>`

#### Example:
```
A0708123456
```

### Type B
Pay a specified amount to a swish number.

#### Format:

`B` `<swish number>` `;` `<amount>`

#### Example:
```
B0708123456;100
```

### Type C
Pay a specified amount to a swish number, with a custom message and specify what fields are editable.

#### Format:

`C` `<swish number>` `;` `<amount>` `;` `<message>` `;` `<editable fields>`

`<message>` and `<editable fields>` can be of length `0`, but the semicolons inbetween are required.

#### Editable fields

This can be used to prefill a value in the fields but keep the fields editable by the user.

Swish expects an integer value (in base 10), and the editable fields are represented by a bitstring.

```js
PHONE_EDITABLE   = 0b001
AMOUNT_EDITABLE  = 0b010
MESSAGE_EDITABLE = 0b100
```


To make both the phone number and amount field editable just bitwise OR the two values.

```js
PHONE_EDITABLE | AMOUNT_EDITABLE  // = 0b011
                                  // converted to base 10 = 3
```

#### Example:

Functionally same as the `B` example:
```
C0708123456;100;;
```

`Message` will be put in the message field:
```
C0708123456;100;Message;
```

`Message` will be put in the message field:
```
C0708123456;100;Message;
```

`Message` will be put in the message field, phone number and amount is editable (but message is not):
```
C0708123456;100;Message;3
```

### Type D
To be documented… Seems to be a `base64`-string.