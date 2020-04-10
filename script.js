var zero_grid = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]];

var sample_grid_1 = [
	[5,3,0,0,7,0,0,0,0],
	[6,0,0,1,9,5,0,0,0],
	[0,9,8,0,0,0,0,6,0],
	[8,0,0,0,6,0,0,0,3],
	[4,0,0,8,0,3,0,0,1],
	[7,0,0,0,2,0,0,0,6],
	[0,6,0,0,0,0,2,8,0],
	[0,0,0,4,1,9,0,0,5],
	[0,0,0,0,8,0,0,7,9]];

var sample_grid_2 = [
	[8,0,0,0,0,0,0,0,0],
	[0,0,3,6,0,0,0,0,0],
	[0,7,0,0,9,0,2,0,0],
	[0,5,0,0,0,7,0,0,0],
	[0,0,0,0,4,5,7,0,0],
	[0,0,0,1,0,0,0,3,0],
	[0,0,1,0,0,0,0,6,8],
	[0,0,8,5,0,0,0,1,0],
	[0,9,0,0,0,0,4,0,0]];

var sample_grid_3 = [
	[0,2,9,0,0,0,4,0,0],
	[0,0,0,5,0,0,1,0,0],
	[0,4,0,0,0,0,0,0,0],
	[0,0,0,0,4,2,0,0,0],
	[6,0,0,0,0,0,0,7,0],
	[5,0,0,0,0,0,0,0,0],
	[7,0,0,3,0,0,0,0,5],
	[0,1,0,0,9,0,0,0,0],
	[0,0,0,0,0,0,0,6,0]];

var sample_grid_4 = [
	[1,0,0,2,0,3,8,0,0],
	[0,0,4,0,5,0,0,0,0],
	[6,0,0,0,0,0,0,0,7],
	[0,0,2,0,9,5,0,3,0],
	[0,8,0,0,0,0,0,1,0],
	[0,4,0,1,2,0,6,0,0],
	[4,0,0,0,0,0,0,0,1],
	[0,0,0,0,3,0,9,0,0],
	[0,0,7,4,0,2,0,0,6]];

var sample_grid_5 = [
	[0,0,5,0,0,0,0,1,0],
	[0,0,3,0,0,0,2,9,0],
	[0,4,0,0,6,0,0,0,8],
	[5,7,0,0,0,4,0,0,0],
	[0,9,0,0,0,0,0,0,0],
	[0,0,0,2,0,8,0,5,0],
	[0,6,9,0,7,0,0,0,0],
	[0,0,0,0,0,0,7,4,0],
	[0,3,0,9,0,0,6,0,0]];

var sample_grid_6 = [
	[0,0,0,4,3,1,0,0,0],
	[0,0,8,0,0,0,4,0,0],
	[0,3,0,0,0,0,0,1,0],
	[2,0,0,0,0,0,0,0,5],
	[3,0,0,0,6,0,0,0,9],
	[9,0,0,0,0,0,0,0,2],
	[0,7,0,0,0,0,0,6,0],
	[0,0,9,0,0,0,5,0,0],
	[0,0,0,8,5,3,0,0,0]];

var clue_grid = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]];

var solution_grid = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]];

var grid = [
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0]];

var steps = 0;

window.onload = function onLoad()
{
	array_to_table(zero_grid);
}

function onClickSolve()
{
	steps = 0;
	table_to_array();
	
	// Quick check
	var count = 0;
	for(var i=0; i<9; i++)
	{
		for(var j=0; j<9; j++)
		{
			if(grid[i][j] != 0)
				count++;
		}
	}

	if(count < 17)
		return;

	copy_grid(grid, clue_grid);
	copy_grid(clue_grid, solution_grid);
	var t0 = performance.now();
	solve();
	var t1 = performance.now();
	//console.log(t1 - t0 + " ms");
	document.getElementById("info").innerHTML = "Solved in " + steps.toLocaleString() + " step(s) and " + ((t1 - t0).toFixed(0)).toLocaleString() + " ms.";
	array_to_table(solution_grid);
}

function onClickClear()
{
	document.getElementById("info").innerHTML = "";
	array_to_table(zero_grid);
}

function onClickSample(id)
{
	document.getElementById("info").innerHTML = "";
	var sample_grid = sample_btn_1;
	switch(id)
	{
		case "sample_btn_1":
			sample_grid = sample_grid_1;
			break;
		case "sample_btn_2":
			sample_grid = sample_grid_2;
			break;
		case "sample_btn_3":
			sample_grid = sample_grid_3;
			break;
		case "sample_btn_4":
			sample_grid = sample_grid_4;
			break;
		case "sample_btn_5":
			sample_grid = sample_grid_5;
			break;
		case "sample_btn_6":
			sample_grid = sample_grid_6;
			break;
	}
	copy_grid(sample_grid, clue_grid);
	array_to_table(clue_grid);
}

function copy_grid(src, dest)
{
	for(var i=0; i<9; i++)
	{
		for(var j=0; j<9; j++)
		{
			dest[i][j] = src[i][j];
		}
	}
}

function array_to_table(grid)
{
	var table = document.getElementById("table");

	for(var i=0; i<9; i++)
	{
		for(var j=0; j<9; j++)
		{
			var textBox = document.createElement('input');
			textBox.type = "text";
			textBox.id = "cell_" + j + "_" + i;
			if(grid[i][j] != 0)
			{
				textBox.value = grid[i][j];
			}
			if(clue_grid[i][j] != 0 || grid[i][j] == 0)
			{
				textBox.className = "clue";
			}
			else
			{
				textBox.className = "solution";
			}
			table.rows[i].cells[j].innerHTML = null;
			table.rows[i].cells[j].appendChild(textBox);
		}
	}
}

function table_to_array()
{
	var table = document.getElementById("table");

	for(var i=0; i<9; i++)
	{
		for(var j=0; j<9; j++)
		{
			var textBox = document.getElementById("cell_" + j + "_" + i);
			if(textBox.value.length == 0 || textBox.className == "solution")
				grid[i][j] = 0;
			else
				grid[i][j] = parseInt(textBox.value);
		}
	}
}

function possible(y, x, n)
{
	for(var i=0; i<9; i++)
	{
		if(grid[y][i] == n)
			return false;
	}

	for(var i=0; i<9; i++)
	{
		if(grid[i][x] == n)
			return false;
	}

	var x0 = Math.floor(x / 3) * 3;
	var y0 = Math.floor(y / 3) * 3;

	for(var i=0; i<3; i++)
	{
		for(var j=0; j<3; j++)
		{
			if(grid[y0+i][x0+j] == n)
				return false;
		}
	}

	return true;
}

function solve()
{
	for(var y=0; y<9; y++)
	{
		for(var x=0; x<9; x++)
		{
			if(grid[y][x] == 0)
			{
				steps++;
				for(var n=1; n<=9; n++)
				{
					if(possible(y, x, n))
					{
						grid[y][x] = n;
						solve();
						grid[y][x] = 0;
					}
				}
				return;
			}
		}
	}
	copy_grid(grid, solution_grid);
}

document.getElementById("solve_btn").addEventListener("click", onClickSolve);
document.getElementById("clear_btn").addEventListener("click", onClickClear);
document.getElementById("sample_btn_1").addEventListener("click", function() {onClickSample(this.id);});
document.getElementById("sample_btn_2").addEventListener("click", function() {onClickSample(this.id);});
document.getElementById("sample_btn_3").addEventListener("click", function() {onClickSample(this.id);});
document.getElementById("sample_btn_4").addEventListener("click", function() {onClickSample(this.id);});
document.getElementById("sample_btn_5").addEventListener("click", function() {onClickSample(this.id);});
document.getElementById("sample_btn_6").addEventListener("click", function() {onClickSample(this.id);});
