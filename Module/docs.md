# 🕇 GodEmbed Documentation 🕇

## Index

- <a href="#tags">Tags</a>
    - <a href="#title">$title</a>
    - <a href="#author">$author</a>
    - <a href="#description">$description</a>
    - <a href="#footer">$footer</a>
    - <a href="#url-tag">$url</a>
    - <a href="#image">$image</a>
    - <a href="#thumbnail">$thumbnail</a>
    - <a href="#field">$field</a>
    - <a href="#timestamp">$timestamp</a>
    - <a href="#color-tag">$color</a>
- <a href="#keywords">Keywords</a>
    - <a href="#and">$and</a>
    - <a href="#blank">$blank</a>
    - <a href="#null">$null</a>
    - <a href="#end">$end</a>
- <a href="#types">Types</a>
    - <a href="#bool">bool</a>
    - <a href="#url-type">url</a>
    - <a href="#img">img</a>
    - <a href="#2048">2048</a>
    - <a href="#1024">1024</a>
    - <a href="#256">256</a>
    - <a href="#date">date</a>
    - <a href="#color-type">color</a>

<a name="tags"></a>

## Tags

<a name="title"></a>

### $title

#### Syntax

$title *<a href="#256">title</a>* \[<a href="#end">$end<a>]

#### Examples

```
$title My Title
```

```
$title 
My 
Multiline
Title
```

```
$title My isolated Title $end
```

<a name="author"></a>

### Tag $author

#### Syntax

$author
*<a href="#256">name</a>* \[<a href="#and">$and<a>]  
\[*<a href="#img">image</a>*] \[<a href="#and">$and<a>]  
\[*<a href="#url-type">url</a>*] \[<a href="#end">$end<a>]

#### Examples

```
$author My Name
http://www.website.com/image.png
http://www.website.com
```

```
$author My 
Multiline
Name 

$and
http://www.website.com/image.png 

$and
http://www.website.com
```

```
$author My Isolated Name $end
```

> To be able to place an argument on multiple lines while omitting one or more optional arguments, **you must place a <a href="#and">$and<a> tag and a <a href="#null">$null<a> tag after the multiline argument** to specify that it is the first argument in its entirety.

```
$author 
My Multiline Name Without 
Optionals Arguments
$and $null $end
```

<a name="description"></a>

### Tag $description

#### Syntax

$description *<a href="#2048">description</a>* \[<a href="#end">$end<a>]

#### Examples

```
$description My Description
```

```
$description 
My 
Multiline
Description
```

```
$title My isolated Description $end
```

<a name="footer"></a>

### Tag $footer

#### Syntax

$footer
*<a href="#2048">text</a>* \[<a href="#and">$and<a>]  
\[*<a href="#img">image</a>*] \[<a href="#end">$end<a>]

#### Examples

```
$footer My Text
```

```
$footer My
Multiline
Text 

$and
http://www.website.com/image.png 
```

```
$footer My Isolated Text
http://www.website.com/image.png 
$end
```

> To be able to place an argument on multiple lines while omitting one or more optional arguments, **you must place a <a href="#and">$and<a> tag and a <a href="#null">$null<a> tag after the multiline argument** to specify that it is the first argument in its entirety.

```
$footer 
My Multiline Text 
Without 
Optional Image
$and $null $end
```

<a name="url-tag"></a>

### Tag $url

#### Syntax

$url *<a href="#url-type">url</a>* \[<a href="#end">$end<a>]

#### Examples

```
$url http://www.website.com
```

```
$url 
http://www.website.com
```

```
$url http://www.website.com $end
```

<a name="image"></a>

### Tag $image

#### Syntax

$image *<a href="#img">url</a>* \[<a href="#end">$end<a>]

#### Examples

```
$image http://www.website.com/image.png 
```

```
$image 
http://www.website.com/image.png 
```

```
$image http://www.website.com/image.png $end
```

<a name="thumbnail"></a>

### Tag $thumbnail

#### Syntax

$thumbnail *<a href="#url-type">url</a>* \[<a href="#end">$end<a>]

#### Examples

```
$thumbnail http://www.website.com/image.png 
```

```
$thumbnail 
http://www.website.com/image.png 
```

```
$thumbnail http://www.website.com/image.png $end
```

<a name="field"></a>

### Tag $field

#### Syntax

$field
*<a href="#256">name</a>* \[<a href="#and">$and<a>]  
*<a href="#1024">value</a>* \[<a href="#and">$and<a>]  
\[<a href="#bool">inline<a>] \[<a href="#end">$end<a>]

#### Examples

```
$field My Name
My Value
true
```

```
$field My 
Multiline
Name 

$and My
Multiline
Value

$and false
```

```
$field My Isolated Name
My Isolated Value 
$end
```

```
$field 
My Multiline Name Without 
Optional Inline Keyword

$and 
My Multiline Value Without 
Optional Inline Keyword
```

<a name="timestamp"></a>

### Tag $timestamp

#### Syntax

$timestamp *<a href="#date">date<a>* \[<a href="#end">$end<a>]

#### Examples

```
$timestamp now
```

```
$timestamp 1995-12-25
```

```
$timestamp 1318781876406
```

```
$timestamp now $end
```

<a name="color-tag"></a>

### Tag $color

#### Syntax

$color *<a href="color-type">color<a>* \[<a href="#end">$end<a>]

#### Examples

```
$color #ffffff
```

```
$color 0xFFFFFF
```

```
$color #ffffff $end
```

#### Details

<a name="keywords"></a>

## Keywords

<a name="and"></a>

### Key $and

#### Usage

The $and keyword is used to separate the arguments when the delimitation becomes fuzzy (for example because of a multiline argument).

#### Examples

```
$tag arg $and arg
```

```
$tag 
multiline
arg 

$and arg
```

<a name="blank"></a>

### Key $blank

#### Usage

The $blank keyword is used to define an accepted void text, like RichEmbed#addBlankField.

#### Example

```
$tag $blank $and arg
```

<a name="null"></a>

### Key $null

#### Usage

The $null keyword is used to define an optional argument as nonexistent. This can be used for example if you want to omit an optional argument after a multiline argument... Or if you want to give an
optional argument lying after an argument that you do not want to define.

#### Examples

```
$tag multiline
arg

$and $null
```

```
$tag arg $and $null $and arg
```

<a name="end"></a>

### Key $end

#### Usage

The $end keyword is used to close a tag, it is always optional and can be used in case you want to comment on your GodEmbed file.

#### Examples

```
$tag arg $end

    My Comment

$tag arg
arg
```

<a name="types"></a>

## Types

<a name="bool">

### Type bool

#### Validation

```js
arg => /(?:true|false)/i.test(arg) ? /true/i.test(arg) : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `true` | `true` | `Boolean` | Set positive boolean |
| `false` | `false` | `Boolean` | Set negative boolean |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="url-type">

### Type url

#### Validation

```js
arg => /(?:https?:\/\/(?:www\.|(?!www))[a-z\d][a-z\d-]+[a-z\d]\.[^\s]{2,}|www\.[a-z\d][a-z\d-]+[a-z\d]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-z\d]+\.[^\s]{2,}|www\.[a-z\d]+\.[^\s]{2,})/i.test(arg) ?
       arg :
       'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `http://www.website.com` | `"http://www.website.com"` | `String` | Set valid URL |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="img">

### Type img

#### Validation

```js
arg => /\S+\.(?:jpg|jpeg|gif|png|bmp|webp)/i.test(arg) ? arg : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `http://www.website.com/image.png` | `"http://www.website.com/image.png"` | `String` | Set valid image URL |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="2048">

### Type 2048

#### Validation

```js
arg => arg.length > 0 ? arg.slice(0, 2048) : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `My text` | `"My text"` | `String` | Set long text |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="1024">

### Type 1024

#### Validation

```js
arg => arg.length > 0 ? arg.slice(0, 1024) : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `My text` | `"My text"` | `String` | Set text |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="256">

### Type 256

#### Validation

```js
arg => arg.length > 0 ? arg.slice(0, 256) : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `My text` | `"My text"` | `String` | Set short text |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="date">

### Type date

#### Validation

```js
arg => /now/i.test(arg) ? Date.now() : (!Number.isNaN(Number(arg)) ? (dayjs(Number(arg)).isValid() ? Number(arg) : 'invalid') : (dayjs(arg).isValid() ? moment(arg).valueOf() : 'invalid'))
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `now` | `1570911861773` | `Number` | Set the date today |
| `1318781876406` | `1318781876406` | `Number` | Set the date from timestamp |
| `2010-10-30` | `1288396800000` | `Number` | Set the date from Moment.js |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |

<a name="color-type">

### Type color

#### Validation

```js
arg => /(?:(?:0x){0,1}|#{0,1})(?:[0-9A-F]{8}|[0-9A-F]{6})/i.test(arg) ? (arg.startsWith('#') ? arg : Number(arg)) : 'invalid'
```

#### Potential

| Input | Output | Output Type | Description |
| --- | --- | --- | --- |
| `#ffffff` | `"#ffffff"` | `String` | Set the color with String hexcode |
| `0xffffff` | `0xffffff` | `Number` | Set the color with haxadecimal Number |
| <a href="#null">$null</a> | `null` | `null` | Set the default value |
