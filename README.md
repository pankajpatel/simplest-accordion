# simplestAccordion Plugin
-------------------------

This plugin receives whole body as argument and processes the elements having the class `item`

The recommended Document structure for the use of Plugin code is as below

```html
<div class='container'>
	<div class='item'>Item 1</div>
	<div class='item-data'>
		<div>
			This is the content for Accordion 1
		</div>
	</div>

	<div class='item'>Item 2</div>
	<div class='item-data'>
		<div>
			This is the content for Accordion 2
		</div>
	</div>

	<div class='item'>Item 3</div>
	<div class='item-data' >
		<div>
			This is the content for Accordion 3
		</div>
	</div>

	<div class='item'>Item 4</div>
	<div class='item-data' >
		<div>
			This is the content for Accordion 4
		</div>
	</div>
</div>
```

For above HTML, the jQuery code to initialize the plugin will be:
```javascript
$(document).ready(function(){
	$('.container').simplestAccordion();
})
```
The above code can be written as following when passed with the options:
```javascript
$(document).ready(function(){
  $('.container').simplestAccordion('.item', '.item-data', 'active');
})
```

The CSS for the plugin is as below, you can add this in your regular CSS files and customize to fulfill oyur requirements

```css
.container {
	display:block;
	width: 500px;
	height : auto ;
	margin: 0 auto;
}

.item {
	display : block;
	width : inherit ;
	height : 40px;
	line-height : 40px;
	background : #555 ;
	border: 1px solid #000 ;
	cursor: pointer;
	color: #fff;
}

.item-data {
	display : none ; 
	width : inherit ;
	height : auto ;
	border: 1px solid #ccc;
}

.active {
	background : #eee ;
	color : #000 ;
}
.item-data div{
	margin: 30px;
}
```
-----------------------------------------------------------------------------
