function extend(sup, sub) {
	sub.prototype = Object.create(sup.prototype);
	sub.prototype.constructor = sup;
	return sub;
}

function Square(square, entry) {
	var id = "";
	this.entry = entry;
	$(square).text("-")
}

Square.prototype.enter = function() {

	this.entry = 'X';
}

Square.prototype.enterC = function(){
	this.entry = 'O';
}

Square.prototype.getEntry = function() {
	return this.entry;
}

Square.prototype.setEntry = function(entry) {
	this.entry = entry;
}

Square.prototype.setID = function(id) {
	this.id = id;
}

function Board() {
	this.sArray = new Array(9);
	this.row1Array = new Array(3);
	this.row2Array = new Array(3);
	this.row3Array = new Array(3);
	this.col1Array = new Array(3);
	this.col2Array = new Array(3);
	this.col3Array = new Array(3);
	this.dia1Array = new Array(3);
	this.dia2Array = new Array(3);
	this.dia3Array = new Array(3);
	this.dia4Array = new Array(3);

	this.root = document.getElementById('game');
	this.root.addEventListener('click', this.playerClick.bind(this))

	this.enterButton = document.getElementById('enter')
	this.enterButton.addEventListener('click', this.enterClick.bind(this))
}

Board.prototype.draw = function() {
	s0 = new Square("#sq0");
	s0.setID("#sq0")
	s0.setEntry("-")
	s1 = new Square("#sq1");
	s1.setID("#sq1")
	s1.setEntry("-")
	s2 = new Square("#sq2");
	s2.setID("#sq2")
	s2.setEntry("-")
	s3 = new Square("#sq3");
	s3.setID("#sq3")
	s3.setEntry("-")
	s4 = new Square("#sq4");
	s4.setID("#sq4")
	s4.setEntry("-")
	s5 = new Square("#sq5");
	s5.setID("#sq5")
	s5.setEntry("-")
	s6 = new Square("#sq6");
	s6.setID("#sq6")
	s6.setEntry("-")
	s7 = new Square("#sq7");
	s7.setID("#sq7")
	s7.setEntry("-")
	s8 = new Square("#sq8");
	s8.setID("#sq8")
	s8.setEntry("-")

}

Board.prototype.reset = function() {
	var b1 = new Board()
	b1.draw();
}

Board.prototype.playerClick = function(evt) {
	$('#sq0').text(s0.getEntry())
	$('#sq1').text(s1.getEntry())
	$('#sq2').text(s2.getEntry())
	$('#sq3').text(s3.getEntry())
	$('#sq4').text(s4.getEntry())
	$('#sq5').text(s5.getEntry())
	$('#sq6').text(s6.getEntry())
	$('#sq7').text(s7.getEntry())
	$('#sq8').text(s8.getEntry())

	id = evt.target.id;

	this.addX(id);
}

Board.prototype.enterClick = function() 
{

	var square = this.whichSquare(id);
	square.enter();

	this.checkW();
}

Board.prototype.enterComp = function()
{
	
	$('#sq0').text(s0.getEntry())
	$('#sq1').text(s1.getEntry())
	$('#sq2').text(s2.getEntry())
	$('#sq3').text(s3.getEntry())
	$('#sq4').text(s4.getEntry())
	$('#sq5').text(s5.getEntry())
	$('#sq6').text(s6.getEntry())
	$('#sq7').text(s7.getEntry())
	$('#sq8').text(s8.getEntry())
	if(this.checkWComp() == true)
		$('#lose').text("You Lose");
}

Board.prototype.whichSquare = function(id) {
	switch (id) {
	case "sq0":
		return s0;
		break;
	case "sq1":
		return s1;
		break;
	case "sq2":
		return s2;
		break;
	case "sq3":
		return s3;
		break;
	case "sq4":
		return s4
		break;
	case "sq5":
		return s5;
		break;
	case "sq6":
		return s6;
		break;
	case "sq7":
		return s7;
		break;
	case "sq8":
		return s8;
		break;

	}

}

Board.prototype.addX = function(id) {
	$('#' + id).text('X');
}

Board.prototype.checkW = function() {
	var v0 = s0.getEntry();
	var v1 = s1.getEntry();
	var v2 = s2.getEntry();
	var v3 = s3.getEntry();
	var v4 = s4.getEntry();
	var v5 = s5.getEntry();
	var v6 = s6.getEntry();
	var v7 = s7.getEntry();
	var v8 = s8.getEntry();

	this.sArray = [v0,v1,v2,v3,v4,v5,v6,v7,v8];
	this.row1Array[1] = v0;
	this.row1Array[2] = v1;
	this.row1Array[3] = v2;
	this.row2Array[1] = v3;
	this.row2Array[2] = v4;
	this.row2Array[3] = v5;
	this.row3Array[1] = v6;
	this.row3Array[2] = v7;
	this.row3Array[3] = v8;
	this.col1Array[1] = v0;
	this.col1Array[2] = v3;
	this.col1Array[3] = v6;
	this.col2Array[1] = v1;
	this.col2Array[2] = v4;
	this.col2Array[3] = v7;
	this.col3Array[1] = v2;
	this.col3Array[2] = v5;
	this.col3Array[3] = v8;
	this.dia1Array[1] = v0;
	this.dia1Array[2] = v4;
	this.dia1Array[3] = v8;
	this.dia2Array[1] = v2;
	this.dia2Array[2] = v4;
	this.dia2Array[3] = v6;

	$('#win').text("");
	$('#lose').text("");
	$('#tie').text("");

	if (this.row1Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if (this.row2Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}	
	else if (this.row3Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}		
	else if (this.col1Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if (this.col2Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if (this.col3Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if (this.dia1Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if (this.dia2Array.toString() == ",X,X,X")
	{
		$('#win').text("You Win");
		return true;
	}
	else if(this.checkTie() == true)
	{
		$('#tie').text("You Have Tied");
		return true;
	}
	else	
		this.compMove();
}

Board.prototype.checkWComp = function()
{
	if (this.row1Array.toString() == ",O,O,O")
		return true;
	else if (this.row2Array.toString() == ",O,O,O")
		return true;
	else if (this.row3Array.toString() == ",O,O,O")
		return true;
	else if (this.col1Array.toString() == ",O,O,O")
		return true;
	else if (this.col2Array.toString() == ",O,O,O")
		return true;
	else if (this.col3Array.toString() == ",O,O,O")
		return true;
	else if (this.dia1Array.toString() == ",O,O,O")
		return true;
	else if (this.dia2Array.toString() == ",O,O,O")
		return true;
	else
		return false;
		

	
}

Board.prototype.checkTie = function()
{
	if(this.sArray.toString().match(/-/g) == null)
		return true;
	else
		return false;
		
}

Board.prototype.checkX = function(entry) {
	return entry == "X"
}

// var table=document.getElementById("table");
// var r=0;
// while(row=table.rows[r++])
// {
// var c=0;
// while(cell=row.cells[c++])
// {
// console.log($('#' + cell.id).text())

// }

Board.prototype.compMove = function() 
{
	if(this.intialMove() == false)
	{
		if(this.finish() == false)
		{
			if(this.blockThree() == false)
			{
				if(this.blockDiag() == false)
				{
					if(this.blockFork() == false)
					{
						if(this.otherMove())
						{
							$('#win').text('Please Make a Move');
						}
					}
				}

			}
		}
		
	}
	
}

Board.prototype.intialMove = function()
{
	
	var bool = false;
	var rand = Math.floor(Math.random() * 4)+1
	
	if(s4.getEntry() != "X" && s4.getEntry() != "O")
	{
		console.log("im1")
		s4.enterC();
		
		bool = true;
		
	}
	else if(s4.getEntry() == "X" && !this.sArray.includes("O"))
	{
		console.log("im2")
		switch(rand)
		{
			case 1:
				s0.enterC();
				break;
			case 2:
				s2.enterC();
				break;
			case 3:
				s6.enterC();
				break;
			case 4:
				s8.enterC();
				break;
			
			
		}
		bool = true;
	}
	
	this.enterComp();
	return bool;
}

Board.prototype.finish = function()
{
	bool = false;
	
	
	if(this.row1Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.row1Array.toString().match(/O/g).length == 2 && this.row2Array.includes("-") && !this.row1Array.includes("X"))
	{
		console.log("finish1")
		var spot = this.row1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s1.enterC();
		if(spot == 3)
			s2.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}

	if(this.row2Array.toString().match(/O/g) < 2)
	{
		bool = false;
	}
	else if(this.row2Array.toString().match(/O/g).length == 2 && this.row2Array.includes("-") && !this.row2Array.includes("X"))
	{
		console.log("finish2")
		var spot = this.row2Array.findIndex(this.findA)
		if(spot == 1)
			s3.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s5.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.row3Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.row3Array.toString().match(/O/g).length == 2 && this.row3Array.includes("-") && !this.row3Array.includes("X"))
	{
		console.log("finsih3")
		var spot = this.row3Array.findIndex(this.findA)
		if(spot == 1)
			s6.enterC();
		if(spot == 2)
			s7.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.col1Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.col1Array.toString().match(/O/g).length == 2 && this.col1Array.includes("-") && !this.col1Array.includes("X"))
	{
		console.log("finish4")
		var spot = this.col1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s3.enterC();
		if(spot == 3)
			s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.col2Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.col2Array.toString().match(/O/g).length == 2 && this.col2Array.includes("-") && !this.col2Array.includes("X"))
	{
		console.log("finish5")
		var spot = this.col2Array.findIndex(this.findA)
		if(spot == 1)
			s1.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s7.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.col3Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.col3Array.toString().match(/O/g).length == 2 && this.col3Array.includes("-") && !this.col3Array.includes("X"))
	{
		console.log("finish6")
		var spot = this.col3Array.findIndex(this.findA)
		if(spot == 1)
			s2.enterC();
		if(spot == 2)
			s5.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.dia1Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.dia1Array.toString().match(/O/g).length == 2 && this.dia1Array.includes("-") && !this.dia1Array.includes("X")) 
	{
		console.log("finish7")
		var spot = this.dia1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(this.dia2Array.toString().match(/O/g) < 2)
		bool = false;
	else if(this.dia2Array.toString().match(/O/g).length == 2 && this.dia2Array.includes("-") && !this.dia2Array.includes("X"))
	{
		console.log("finish8")
		var spot = this.dia2Array.findIndex(this.findA)
		if(spot == 1)
			s2.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	return bool
		
}

Board.prototype.blockThree = function()
{
	bool = false;
	
	
	if(this.row1Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.row1Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.row1Array.toString().match(/X/g).length == 2 && this.row1Array.includes("O"))
		bool = false;
	else if(this.row1Array.toString().match(/X/g).length == 2 && this.row1Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT1")
		var spot = this.row1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s1.enterC();
		if(spot == 3)
			s2.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}
	if(this.row2Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.row2Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.row2Array.toString().match(/X/g).length == 2 && this.row2Array.includes("O"))
		bool = false;
	else if(this.row2Array.toString().match(/X/g).length == 2 && this.row2Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT2")
		var spot = this.row2Array.findIndex(this.findA)
		if(spot == 1)
			s3.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s5.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}
	if(this.row3Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.row3Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.row3Array.toString().match(/X/g).length == 2 && this.row3Array.includes("O"))
		bool = false;
	else if(this.row3Array.toString().match(/X/g).length == 2 && this.row3Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT3")
		var spot = this.row3Array.findIndex(this.findA)
		if(spot == 1)
			s6.enterC();
		if(spot == 2)
			s7.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}

	if(this.col1Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.col1Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.col1Array.toString().match(/X/g).length == 2 && this.col1Array.includes("O"))
		bool = false;
	else if(this.col1Array.toString().match(/X/g).length == 2 && this.col1Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT4")
		var spot = this.col1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s3.enterC();
		if(spot == 3)
			s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}
	if(this.col2Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.col2Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.col2Array.toString().match(/X/g).length == 2 && this.col2Array.includes("O"))
		bool = false;
	else if(this.col2Array.toString().match(/X/g).length == 2 && this.col2Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT5")
		var spot = this.col2Array.findIndex(this.findA)
		if(spot == 1)
			s1.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s7.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}
	if(this.col3Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.col3Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.col3Array.toString().match(/X/g).length == 2 && this.col3Array.includes("O"))
		bool = false;
	else if(this.col3Array.toString().match(/X/g).length == 2 && this.col3Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT6")
		var spot = this.col3Array.findIndex(this.findA)
		if(spot == 1)
			s2.enterC();
		if(spot == 2)
			s5.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool=true;
		return bool;
		
	}
	
	if(this.dia1Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.dia1Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.dia1Array.toString().match(/X/g).length == 2 && this.dia1Array.includes("O"))
		bool = false;
	else if(this.dia1Array.toString().match(/X/g).length == 2 && this.dia1Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT7")
		var spot = this.dia1Array.findIndex(this.findA)
		if(spot == 1)
			s0.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s8.enterC();
		
		this.enterComp();
		bool=true;
		return bool;
		
	}
	if(this.dia2Array.toString().match(/X/g) == null)
		bool = false;
	else if(this.dia2Array.toString().match(/X/g).length < 2)
		bool = false;
	else if(this.dia2Array.toString().match(/X/g).length == 2 && this.dia2Array.includes("O"))
		bool = false;
	else if(this.dia2Array.toString().match(/X/g).length == 2 && this.dia2Array.toString().match(/-/g).length == 1)
	{
		console.log("blockT8")
		var spot = this.dia2Array.findIndex(this.findA)
		if(spot == 1)
			s2.enterC();
		if(spot == 2)
			s4.enterC();
		if(spot == 3)
			s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
		
	}
	return bool;
}

Board.prototype.blockDiag = function()
{
	var bool = false;
	var rand = Math.floor(Math.random() *4)+1
	
	if(this.sArray.toString().match(/-/g).length < 6)
		bool = false;
	else if((s0.getEntry() == "X" && s8.getEntry() == "X") || (s2.getEntry() == "X" && s6.getEntry() == "X"))
	{
		console.log("blockD")
		if(rand == 1)
			s1.enterC();
		if(rand == 2)
			s3.enterC();
		if(rand == 3)
			s5.enterC();
		if(rand == 4)
			s7.enterC();
		
		this.enterComp();
		bool = true;
	}
	return bool;
}

Board.prototype.blockFork = function()
{
	var bool = false;
	if(s6.getEntry() != "-" && this.col1Array.includes("X") && this.col1Array.toString().match(/X/g).length < 2 && this.row3Array.includes("X") && this.row3Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF1")
		s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}

	
	
	if(s0.getEntry() == "X" && s1.getEntry() != "X" && this.col2Array.includes("X") && this.col2Array.toString().match(/X/g).length < 2 && this.row1Array.includes("X") && this.row1Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF2")
		s6.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(s2.getEntry() == "X" && s1.getEntry() != "X" && this.col2Array.includes("X") && this.col2Array.toString().match(/X/g).length < 2 && this.row1Array.includes("X") && this.row1Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF3")
		s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	
	if(s6.getEntry() == "X"&&s7.getEntry() != "X" && this.col2Array.includes("X") && this.col2Array.toString().match(/X/g).length < 2 && this.row3Array.includes("X") && this.row3Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF4")
		s0.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	
	if(s8.getEntry() == "X"&&s7.getEntry() != "X" && this.col2Array.includes("X") && this.col2Array.toString().match(/X/g).length < 2 && this.row3Array.includes("X") && this.row3Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF4")
		s2.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	
	if(s0.getEntry() != "X" && this.col1Array.includes("X") && this.col1Array.toString().match(/X/g).length < 2 && this.row1Array.includes("X") && this.row1Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF5")
		s0.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}

	if(s2.getEntry() != "X" && this.col3Array.includes("X") && this.col3Array.toString().match(/X/g).length < 2 && this.row1Array.includes("X") && this.row1Array.toString().match(/X/g).length < 2 )
	{
		console.log(this.col3Array)
		console.log(this.row1Array)
		console.log("blockF6")
		s2.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	if(s8.getEntry() != "X" && this.col3Array.includes("X") && this.col3Array.toString().match(/X/g).length < 2 && this.row3Array.includes("X") && this.row3Array.toString().match(/X/g).length < 2 )
	{
		console.log("blockF7")
		s8.enterC();
		
		this.enterComp();
		bool = true;
		return bool;
	}
	
	
	return bool;
}

Board.prototype.otherMove = function()
{
	console.log("otherMove")
	var indexesArray = [];
	for(let i = 0; i<this.sArray.length;i++)
	{
		if(this.sArray[i] == "-")
		{
			indexesArray.push(i);
		}
	} 
	var indexFromArray;
	var aLength = indexesArray.length;
	var rand = Math.floor(Math.random() * aLength)+1
	
	switch(rand)
	{
		case 1:
			indexFromArray = indexesArray[0];
			break;
		case 2:
			indexFromArray = indexesArray[1];
			break;
		case 3:
			indexFromArray = indexesArray[2];
			break;
		case 4:
			indexFromArray = indexesArray[3];
			break;
		case 5:
			indexFromArray = indexesArray[4];
			break;
		case 6:
			indexFromArray = indexesArray[5];
			break;
		case 7:
			indexFromArray = indexesArray[6];
			break;
			
	}
	console.log(indexFromArray)
	this.whichSpot(indexFromArray);

	this.enterComp();

}

Board.prototype.findA = function(value)
{
	
	return value == "-"	

	
}

Board.prototype.whichSpot = function(indexFromArray)
{
	switch(indexFromArray)
	{
		case 0:
			s0.enterC();
			break;
		case 1:
			s1.enterC();
			break;
		case 2:
			s2.enterC();
			break;
		case 3:
			s3.enterC();
			break;
		case 4:
			s4.enterC();
			break;
		case 5:
			s5.enterC();
			break;
		case 6:
			s6.enterC();
			break;
		case 7:
			s7.enterC();
			break;
		case 8:
			s8.enterC();
			break;
	}
}

$(document).ready(function() {
	var id;
	var b0 = new Board();
	b0.draw();

	$('#reset').click(function() {
		location.reload();
	});

});