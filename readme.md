# My personal webpage...


**Built with**
+ ECMAScript v6
+ node v6.11


There are 3 alternative layouts for this website, saved as branches.
+ topHeaderFinal
+ slimWideHeader
+ centeredLayout


To see altenative layouts:
```
$ npm i
$ npm start
> open localhost:8080 in a browser
> and in a separate terminal:
$ git checkout branchName
```


#### To do
+ build blog with hexa.io
+ convert homepage to blog archive
+ add content
+ remove #root


#### HTML Structure
```
#root               // container for Shell
  Shell             // container for all HTML pages
    Shell__sidebar
      header        // picture, home
      nav           // pages
      icons         // social
    Shell__contents // HTML pages are rendered here
```


#### Acknowledgements:
Used [jgallen23/routie](https://github.com/jgallen23/routie) v0.3

Used Tempurturtul/web-template https://github.com/Tempurturtul/web-template/commit/60c2189fb55c244bcc490b467599a23570d99bd9

Used Font Awesome v4.7
