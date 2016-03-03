# simplestAccordion Plugin
-------------------------
#### by Pankaj Patel[http://pankaj.pro/]
======================================
This plugin receives whole body as argument and processes the elements having the class [item]

The recommended Document structure for the use of Plugin code is as below
```
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
-----------------------------------------------------------------------------
The CSS for the plugin is as below
```
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
