(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.startBT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8C8IAAlAIigAAIAAg3IG5AAQAAAcgLAOQgMANgWAAIh4AAIAAFAg");
	this.shape.setTransform(273.8,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABcC8Ih6idIhJAAIAACdIh1AAIAAlJQAAgXALgLQAMgMAXAAIDDAAQBSAAAlANQAkANARAnQAIAUAAAUQACAUgFATQgHAUgLAOQgMAMgRAIQgjAPgVAAIB+CigAhngZIB8AAQAhAAAVgTQAKgPAAgRQAAgQgKgRQgVgSghAAIh8AAg");
	this.shape_1.setTransform(226,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACAC8Igyh+IibAAIgyB+Ih1AAIB7lHQAJgYARgMQAQgMAYAAIBwAAQAXAAAQAMQARAMAJAYIB7FHgAA6AHIg6ieIg5CeIBzAAg");
	this.shape_2.setTransform(175.9,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9C8IAAlAIifAAIAAg3IG5AAQAAAcgLAOQgLANgXAAIh5AAIAAFAg");
	this.shape_3.setTransform(125.7,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiiCsQgegRgQgeQgOgeAAgrIBzAAQAAAoAYAUQAYAUAwAAQA5AAAdgQQAegQABghQgCgnhzAAQhkAAgtgUQg5gVAAhAQAAggAPgXQAPgXAegQQAWgLAmgFQAngGA2AAQA2AAAmAGQAmAFAWALQAgATAPAcQAPAcAAAlIh1AAQgBgkgZgSQgZgSgwAAQgvAAgYAOQgYANAAAcQAAAqBfAAQCDgCAtAZQAxAXAAA3QAAAlgPAbQgPAagfAPQgsAWh6AAQh8AAgigWg");
	this.shape_4.setTransform(77.6,46.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3333CC").s().p("A5THRQikAAAAikIAApaQAAijCkAAMAynAAAQCkAAAACjIAAJaQAACkikAAg");
	this.shape_5.setTransform(178.4,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.8,93);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



// stage content:
(lib.profile_Canvas_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start:0,Q1:5,"Q1":11,"Q1":17,"Q1":23,"Q1":29,"Q1":35});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.startBT.addEventListener("click", fl_ClickToGoToQ1.bind(this));
		
		function fl_ClickToGoToQ1()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		this.stop();
		/* テキスト入力テキスト変更イベント
		TextInput コントロールのテキストを変更すると、この関数が実行されます。この関数には独自のカスタムコードを追加できます。
		
		手順 :
		1. 以下の「// カスタムコードを開始」と記述された行の後ろに新しい行を挿入して、カスタムコードを追加します。
		*/
		if(!this.nameL_change_cbk) {
			function nameL_change(evt) {
				// カスタムコードを開始
				console.log(evt.target.value);
				// カスタムコードを終了
			}
			$("#dom_overlay_container").on("change", "#nameL", nameL_change.bind(this));
			this.nameL_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(36));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3333CC").s().p("AjcDFIAAktIgNAAIAADPIgzAAIAAjcQgBgqAwABIARAAIAAgmIBeAAIAAAmIAZAAQAngBAAAqIAABhIAOAAIAAh3QAAgvAwAAIEAAAQAAAbgJAOQgJANgSAAIioAAIAAANICyAAQAAATgIAJQgGAJgPAAIiVAAIAAAOICyAAQAAASgIAJQgGAJgPAAIiVAAIAAAMIDeAAQAAA1grgBIApAcQgNAMgSAIIgoAOQAsAhAoAVIhjAxQgfgdgbgkQgiArg7AJQg8AKgpACIgCg6IASAAIAAhqIgMAAIAABHIgzAAIAAjPIgNAAIAAEtgAA2CGIBHgFIgKgPQgggwgLgiIgSAAgACxBGQAMgSAGgUIgwAAQAKASAUAUg");
	this.shape.setTransform(873.8,334.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333CC").s().p("AgYC7QgMgLAAgYIAAlaIB0AAIAAEYQAkgOArgeQAsggAygvQgOA3gZArQgYAqglAcQgkAdgjAQQgkAQgiADIgKAAQgQAAgKgIgAjgB6QALggAFgjQAGgigBgyQAAgzgHhDICRgPQgBB5gqBfQgVAwgkAgQgkAhgzASQARgfALggg");
	this.shape_1.setTransform(815.4,334.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3333CC").s().p("AjTAbIAAg1IGnAAQAAAagMAOQgLANgXAAg");
	this.shape_2.setTransform(765.4,332.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3333CC").s().p("AgvCYIAAiVQhTAHhLgCQBAgTAygUQAxgTAigUQBDgoApgpIBqBCQgwAqhZAXIAACsg");
	this.shape_3.setTransform(720,339.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3333CC").s().p("Ai8C2QBggmA4gnQAbgUAWgeQAXgeASgmQAjhQgFgiIksAAIAAg3IF6AAQAdgCANAOQAOAOgCAdQgKCghrBOQhhBIifAAIgfgBg");
	this.shape_4.setTransform(674,336.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3333CC").s().p("AipCyQgtAAAAguIAAkHQAAgXAMgLQAKgMAXABIFTAAQAXgBALAMQALALAAAXIAAEHQAAAugtAAgAhhB7IDDAAIAAj0IjDAAg");
	this.shape_5.setTransform(627.3,335.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3333CC").s().p("AjkDVQBggmAzgrQA0gqAlhPIAchBQAJgbAAgPIksAAIAAg4IGNAAQAAgcARgQQAQgRAYAAQAYAAARARQAQAQAAAYQAAAZgQAQQgRAQgYAAQgNAAgKgEIABAQQgaCXhjBOQhZBIigAAIgfgBgACyixQgIAKAAALQAAAMAIAJQAJAJAMAAQAMAAAJgJQAKgJAAgMQAAgLgKgKQgJgJgMAAQgMAAgJAJg");
	this.shape_6.setTransform(576.6,333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3333CC").s().p("AgVC5QBMgfAngrQAngqACg2QAAhsg6ghQgZDFgZAoQgYAngfAPQggAQgaACQgZACglgHQgmgGgfgkQgggjgChCQgDhKAfg5QAQgcAZgTQAagSAkgJQAjgJAmgDQAmgEAmABQBpADA8A2QA8A2gCBaQgICqj1AAIgUgBgAhlhiQgkAlABBcQABBZAaAHQAKABAKgNQAJgNAKgbQASg3ANiYIgFAAQgZAAggAig");
	this.shape_7.setTransform(522,336);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3333CC").s().p("AklDDQBlgtBLiDQAmhAAWg2QAWg2AFgqIB2AGQgVBYgiBCQARATAaARQAbATAkARQBKAiBRANIgoBvQg0gSgpgUQgpgUgfgXQg8gvgZgtQgcA4giAkQghAkglARQglASgqAHQgbAEgcAAIgfgBg");
	this.shape_8.setTransform(463.5,334.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3333CC").s().p("AkcDDQBTg8AzhGQAyhFAThDIjFAAIAAg2IDZAAQAOgnAFgfIBzADIgVBDIDgAAQAAAbgLAOQgMANgWAAIi0AAQAaA1A+ApQAfAVAkARQAlASAqAOIgyBmQhOggg8g3Qg8g3gbg/QgbA9ghArQggAqglAWQhAAmhNAAIgYgBg");
	this.shape_9.setTransform(400.6,334.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AhbCQIAAkfIAoAAIAAD8ICPAAIAAAjg");
	this.shape_10.setTransform(974.2,314.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AhDBSQgbgcAAgzQAAgyAbgfQAbggArAAQAWAAAVALQAVAKALARQAKAQAEAVQADAOAAAfIiXAAQABAgAOATQAOATAcAAQAbAAARgSQAJgLADgNIAjAAQgBALgIAOQgIAOgJAJQgQAQgYAGQgMADgPAAQgnAAgbgdgAA7gRQgCgXgIgOQgOgZgiAAQgXAAgQASQgQARgBAbIByAAIAAAAg");
	this.shape_11.setTransform(950.6,318.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("ABoBrIAAiRQAAgUgKgIQgLgIgOAAQgWAAgOAOQgPAOgBAhIAAB4IgiAAIAAiIQAAgVgFgJQgIgPgWAAQgUAAgQAPQgQAPgBApIAABuIgiAAIAAjQIAiAAIAAAdQAMgPALgHQARgMAWAAQAZAAAQANQAHAHAHANQALgQARgIQAQgJATAAQArAAAPAeQAHARABAcIAACKg");
	this.shape_12.setTransform(923.1,317.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AhQBdQgSgSAAgaQAAgdASgQQASgPAegEIA3gHQAMgBAEgJQACgFABgIQAAgTgNgIQgNgIgXAAQgcAAgLAPQgHAIgBARIghAAQABgnAYgPQAYgQAgAAQAkAAAXAPQAWAOABAdIAAB4QAAAFACAEQACADAIAAIAFAAIAGgBIAAAaIgMADIgMAAQgTAAgHgNQgFgGgCgNQgKAOgUAKQgUALgYAAQgdAAgTgSgAAYAEIgUAEIgUADQgUADgJAFQgRAJAAAUQAAAPAMAJQALAJAPAAQATAAAQgJQAdgOABggIAAgbQgHADgKACg");
	this.shape_13.setTransform(895.8,318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AAxBrIAAiDQAAgTgFgMQgKgTgYAAQgMAAgIACQgOAFgLAMQgJALgDALQgCALAAAUIAABtIgjAAIAAjQIAhAAIAAAdQAPgSAQgIQARgIATAAQAtAAAPAfQAJARAAAgIAACFg");
	this.shape_14.setTransform(873.2,317.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgDBzQgTgBgLgKQgMgKABgMQACgMAOgIQAOgIATABQATABAMAKQAMAJgDANQgCAMgNAIQgNAHgQAAIgEAAgAgDg2QgTgBgLgKQgMgKABgMQACgMAOgIQAOgHATAAQATABAMAKQAMAKgDAMQgCAMgNAIQgMAHgQAAIgFAAg");
	this.shape_15.setTransform(738.4,320.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgeB7IAAiEQggAGgeACQgfACgegBQBJgXBBghQBAggAegiIBLAoQgTARgcAOQgcAOglALIAACVg");
	this.shape_16.setTransform(716,319.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AiVB3QAvgbAlgjQAlgjAPgWIgIgEQhDgmgdgNQAdgGBUAaIALADQAUgmAPgxIBUAOQgUA3ghAtQAbALAyAfIgqA8QgigjglgaIgaAXQhKA9hPAAIgHgBg");
	this.shape_17.setTransform(683.5,319.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AhLB7QgcAAAAgcIAAgvQgxAEgdgbQBugTApgVQgPgYgTgQQgLAIgNAEQgMAFgPACQgcAEgigIQBHgoAUgqIBOADIgHALICKAAQAOAAAHAHQAHAGAAANQgBAphhAsIBkAAQAPAAAHAGQAHAHAAANIAABCQAAAOgHAHQgHAHgPAAgAgeBZICKAAIAAg0IiKAAgAgwhEQAcAGAzATQAegSAIgOIhsAAg");
	this.shape_18.setTransform(647.6,319.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AhiCQIAAkfIDGAAIAAAkIifAAIAABXICMAAIAAAhIiMAAIAACDg");
	this.shape_19.setTransform(537,314.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AhDBSQgbgcAAgzQAAgyAbgfQAbggArAAQAWAAAVALQAVAKALARQAKAQAEAVQADAOAAAfIiXAAQABAgAOATQAOATAcAAQAbAAARgSQAJgLADgNIAjAAQgBALgIAOQgIAOgJAJQgQAQgYAGQgMADgPAAQgnAAgbgdgAA7gRQgCgXgIgOQgOgZgiAAQgXAAgQASQgQARgBAbIByAAIAAAAg");
	this.shape_20.setTransform(512.3,318.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("ABoBrIAAiRQAAgUgKgIQgLgIgPAAQgUAAgQAOQgOAOAAAhIAAB4IgjAAIAAiIQAAgVgFgJQgIgPgWAAQgUAAgQAPQgQAPAAApIAABuIgkAAIAAjQIAjAAIAAAdQANgPAJgHQASgMAWAAQAZAAAPANQAIAHAHANQAMgQAPgIQAQgJAUAAQArAAAOAeQAJARgBAcIAACKg");
	this.shape_21.setTransform(484.8,317.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AhPBdQgTgSAAgaQAAgdASgQQASgPAegEIA3gHQAMgBAEgJQACgFAAgIQAAgTgMgIQgNgIgXAAQgcAAgLAPQgGAIgCARIghAAQABgnAYgPQAYgQAgAAQAjAAAYAPQAXAOgBAdIAAB4QABAFACAEQACADAHAAIAFAAIAHgBIAAAaIgNADIgLAAQgSAAgJgNQgEgGgCgNQgLAOgUAKQgTALgYAAQgdAAgSgSgAAYAEIgUAEIgUADQgTADgKAFQgQAJAAAUQAAAPALAJQALAJAPAAQATAAAQgJQAegOgBggIAAgbQgGADgKACg");
	this.shape_22.setTransform(457.4,318);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAxBrIAAiDQAAgTgFgMQgKgTgYAAQgMAAgIACQgOAFgLAMQgJALgDALQgCALAAAUIAABtIgjAAIAAjQIAhAAIAAAdQAPgSAQgIQARgIATAAQAtAAAPAfQAJARAAAgIAACFg");
	this.shape_23.setTransform(434.8,317.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgDByQgTAAgLgKQgMgKABgMQACgMAOgIQAOgIATABQATACAMAJQAMAKgDAMQgCAMgNAIQgNAHgQAAIgEgBgAgDg3QgTAAgLgKQgMgJABgNQACgMAOgIQAOgIATACQATABAMAJQAMAKgDAMQgCAMgNAIQgMAHgQAAIgFgBg");
	this.shape_24.setTransform(308.5,315.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgeB7IAAiEQggAGgeACQgfACgegBQBJgXBBghQBAggAegiIBLAoQgTARgcAOQgcAOglALIAACVg");
	this.shape_25.setTransform(286.1,314.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgiB3QhHgDAAhJIAAhbIgpAAIAAgiIApAAIAAgkIBKAAIAAAkICWAAQAgAAgFAdQgDAQgTAaQgUAZg7ANQAQgpAGgbIABgHIhjAAIAABaQgCAqAhAAICOAAQAAASgIAIQgHAJgOAAg");
	this.shape_26.setTransform(253.7,314.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AhKBiQgWAahLgCQArgdANgTIgngYQgMgHgDgKQgDgKAFgNIALhDIgLAAIAAgiIAPAAIADgeIBDACIgGAcIArAAQALABAFAHQAGAJgCAQQgDBLgTAoIAYALIgPA3gAh2AXIASAKQANgrADgvIgMAAQgQBAgGAQgAgbB6IAAgjIBLAAIAAg5Ig6AAIAAgYQgJAHgLAEQAIgbAEglQADgkAAgnIA0ACIgDAoIAOAAIAAgpIBDAAIAAApIA2AAQAAAjgWAAIggAAIAAAqIAvAAQAAAhgVAAIgaAAIAAA5IA5AAQAAAjgVAAgAASgVQgGAKgLAIIAvAAIAAgqIgVAAQgDANgGALg");
	this.shape_27.setTransform(218.3,314.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3333CC").s().p("AgxAzQgVgVAAgeQAAgeAVgUQATgUAeAAQAfAAAUAUQAUAUAAAeQAAAegUAVQgUAUgfAAQgeAAgTgUgAgZgaQgLAMAAAOQAAAPALALQALALAOAAQAPAAALgLQAMgLAAgPQAAgOgMgMQgLgLgPAAQgOAAgLALg");
	this.shape_28.setTransform(1098.6,139.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3333CC").s().p("AjCC5QgRgKgLgSQgLgTgGgfQgFgeAAgpQAAhPAMiRIBxAGQgSCQABA1QABAcAHAOQAHANAOgCQAYgFBCgvQgOBVgsAzQglAqgpAAQgXAAgSgJgABHjBQCGBHAoDeIiAASQgKiYgkifg");
	this.shape_29.setTransform(1063.4,126.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3333CC").s().p("AioCqQgcgNgMgVQgNgWABgdQAEg7A2gdQAZgPA1gEQA1gEBPAGIggg6Ij6AAIAAg2IDdAAIgkg/IB2AAIAkA/ICCAAQAAAbgLAOQgMANgWAAIg3AAIAuBRQALArgzgFQiGgTgqACQggABgRAPQgQAPgBAdQAAA7BwgBIC0AAQAAAbgLAOQgLANgXAAIiHAAIgJAAQh0AAg2gag");
	this.shape_30.setTransform(1011.9,126.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3333CC").s().p("Aj0DWIBFkgIhFAAIAAg2IBSAAIAMgzIB1AAIgMAzICSAAQAAAbgMAOQgLANgXAAIhxAAIhFEggAgUDDQgbgKgNgRQgNgRABgZQABgyB3gWQgVAbgDATQgCAUARANQAhAaAzgBIBsAAQAAAcgLANQgLAOgXAAIg/AAIgJAAQhUAAgygSgAgmAKIAAg2ID7AAQAAAcgLANQgMANgWAAgABgimIgVgoQAjAPAUAOQAUAOAYAdIg6AdgACnivIgYgmQAkAMAVANQAUANAZAbIg5Ajg");
	this.shape_31.setTransform(960.2,125.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3333CC").s().p("ABJDFQg5iIjFg7QgdgKACgVQACgVAWgIQDVhLAjg/ICIAAQg4BokABBQB5AYBRA3QBQA4AnBZg");
	this.shape_32.setTransform(911.1,126.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3333CC").s().p("AAqC3QgxgDgUgHQgpgOgagiQgNgRgHgYQgHgXgBgeQADg/AngsQAogsBGgKIkIAJIAAg2IHVgKQADAZgUAQQgTARgrAIQhWASgoAtQgUAYgJAcQgHAdADAiQACAjAZASQAZASAwAAIB3AAQAAAcgLAOQgLANgXAAg");
	this.shape_33.setTransform(862.9,127.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3333CC").s().p("AijCmQgagPgNggQgNgggBgyIAAjoIB1AAIAADpQAABqBmgCQAggBAXgJQAXgLAPgUQAOgVALglQAKgmAGgzQAuAbARAkQARAnAAAeQgBAggMAWQgMAWgXALQgtAXh3AAQh1AAgzgeg");
	this.shape_34.setTransform(814.1,127.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3333CC").s().p("ACEC8QgdgIgZgQQgwgggQgtQAwALBUAEQAMhqABhMIiBAAQgIAlgRAqQgSAogcAuQgcAvg7AbQg7AbhZAIQAbgXAcggQAcggAfgrQA8hTAIg9IilAAIAAg4ICuAAIAEg7ICHAMIgKAvIC8AAQAWAAALAMQALALAAAXQADB/gVBvQgHAYgQAMQgPAMgaAAQghAAgdgIg");
	this.shape_35.setTransform(759.3,126.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3333CC").s().p("ABUCCQgWgXgPgaQgRgagKgdQgkA6hFA1QhGA0h/ABQBIg1BOhSQBMhRAuhHQgEgLgBgbIirAAIAAg3IDbAAQAoAAADAoQAAAYALAiQALAjAYAvQAuBbB0A7IiCAzQgcgQgqgtg");
	this.shape_36.setTransform(696.5,127.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3333CC").s().p("AhbDAQgVgCgSgHQgSgGgNgLQgcgWACgcQAAgWAOgVQAQgUAegTIhrgOIBEiAIhEAAIAAg2IBgAAIARggIB+AAIgRAgIDxAAQAAAbgMAOQgLANgXAAIjiAAIgIAOQA1gBAwANQATAFAPALQAQAKAMAQIB4gZQAGA2gwANIg1ANQAIAiAAAuIh1AAIABg0IhBAVQgkAQABAdQgBAPAcAIQAcAHA5ABIDCAAQAAAcgLAOQgMANgWAAIg/AAQh6AAhggDgAhHgrIggBAQAogTBRgUQgHgPgLgFQgUgGgcAAIgXABg");
	this.shape_37.setTransform(639.7,126.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3333CC").s().p("AB7C8QgSgDgPgQQgPgRgMgdQAsAJAmABIAAjBIBvAAIAADRQAAAXgLALQgKAMgUAAIgIAAQgzAAghgHgAhhDCIAAhXIgyAAIAABXIhuAAIAAjUQAAgUAKgKQAKgKAUAAIC/AAQAUAAAJAKQAKAKAAAUIAAClQAAAXgKAMQgJAMgUAAgAiTBEIAyAAIAAgWIgyAAgAiTAIIAyAAIAAgWIgyAAgAAmBoIAAiRIBTAAIAACRgAkUhIIAAgwIIpAAQAAAYgJAMQgJAMgRAAgABxicQARgSAHgUIB3ALQgHAdgpAOQgVAHgjAEIhUADQAbgOASgQgAkAjCQBsgDAkAVQAkAVAIATIh5AKQgZgjgqghg");
	this.shape_38.setTransform(583,127.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3333CC").s().p("Ah5DFQgtAAAAguIAAhLQhOAHgugqQCvgfBCgiQgXgmgfgbQgSANgUAHQgUAIgXADQguAGg1gNQBwhAAhhDIB9AFIgLASIDdAAQAWAAAMAKQALALAAAVQgCBBibBHIChAAQAWAAALAKQAMALAAAVIAABoQAAAXgMALQgLAMgWAAgAgxCPIDfAAIAAhUIjfAAgAhNhtQArAJBUAfQAvgdAOgXIiuAAg");
	this.shape_39.setTransform(520.1,126.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3333CC").s().p("Ah2DCQgcgCgXgIQgXgHgQgNQghgbgDg4QgCgcAFgWQAFgWALgOQALgPAQgLQAPgLAUgGQAngOAgAAIAAgrIiQAAIAAg2ICQAAIAAgjIBxAAIAAAjIBRAAQAAAbgLAOQgLANgXAAIgkAAIAAAmQAnAAAkAHQAjAHAhAOQBCAeACBKQgCCIjVgHQBthAgNhIQgOhHhOADIAABXQABBSgpAUQgUAKgZAEQgPACgRAAIgWgBgAiEBDQgCA3AqATIAAiTQgmAAgCBJgABqjCQAxADAjAbQAjAcAVA0IhpAYQgIhZgbgtg");
	this.shape_40.setTransform(462.3,126.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3333CC").s().p("AjtDFIBEkgIhEAAIAAg2IBSAAIALgzIB2AAIgMAzIDvAAQAAAbgMAOQgLANgXAAIjOAAIhFEggAgNCyQgbgKgNgRQgNgRABgZQABgyB3gWQgVAbgDATQgCAUARANQAhAaAzgBIBsAAQAAAcgLANQgLAOgXAAIg/AAIgJAAQhUAAgygSgAgfgGIAAg3ID7AAQAAAcgMANQgLAOgXAAg");
	this.shape_41.setTransform(355.6,126.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3333CC").s().p("Ah1CwQgUgMgLgSQgJgTAAgYQAAglAPgZQAOgYAdgLQA6gWBOAIIAAg2IB2AAIAABAQA+AIAkANIgYBZIhKgtQABA9gdAgQgdAfhXAFIgcABQhCAAgigVgAgZA+QgUANAAAcQgBAPAGAJQAGAJANAEQAeAEAQgWQAOgXgCgyIgFAAQgkAAgVANgAj8ATIA1h3Ig1AAIAAg3IBMAAIARgpIB2AAIgSApICEAAQAAAcgLANQgLAOgXAAIhuAAIg1B3gAB8h9QgXgegogpQBIAFArATQArATAiAbIhPBVQgcg1gWgfg");
	this.shape_42.setTransform(302.7,126.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3333CC").s().p("AAbDCQA1gdAageQAbgeAAggQgDgigIgIQgpBJgVAXQgeAjgcANQgaAOgRADQgZAEgogCQgpgBgqgZQgrgYgFhFQgDg/AWgfQALgQAPgLQAQgMATgHQAngPAUAAIAAgiIiDAAIAAg3ICDAAIAAgZIBrAAIAAAZIDUAAQAAAcgLANQgLAOgXAAIinAAIAAAcIA0AGIAGgcIB0AUIgUAoQBNAhgCBmQgFBsioAAIgmgBgAh6AAQgJAYgBAxQACA6AgAKIAAimQgQAAgIAZgAAJBNQATgoASg8IglgGg");
	this.shape_43.setTransform(249.8,126.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3333CC").s().p("AgFC3QgegCgTgPQgTgPACgUQADgTAXgNQAWgMAfACQAfACATAPQASAPgEAUQgDATgWANQgSAKgZAAIgJAAgAgFhYQgegCgTgPQgTgPACgUQADgTAXgNQAWgMAfACQAfACATAPQASAPgEAUQgDATgWANQgSAKgZAAIgJAAg");
	this.shape_44.setTransform(194.4,128.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3333CC").s().p("AgDC+IAAlFIhtAAIAAg2ICxAAQAwAAAAAzIAAFIg");
	this.shape_45.setTransform(151.4,127.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3333CC").s().p("AA/CWIgxABQiWAAgigaQgcgWgOgoQgNgoAAg6QAAhGATgtQAUgtAngTQAbgLAlgFQAkgGAvABQAugBAkAGQAmAFAaALQAoATAUAtQAVAtgBBGQAAB2gsAiIgQAJIAqAyIhKA8gAATBiIgsg5IBHg7IA0A9QAMgdgBgzQAAhFgbghQgagjg1ABQg4gBgcAjQgdAhAABFQAABDAfAhQAfAjA8AAIAHAAg");
	this.shape_46.setTransform(113.8,132.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:522,y:336}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_7,p:{x:408.7,y:128.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},5).wait(36));

	// 入力テキスト
	this.nameL = new lib.an_TextInput({'id': 'nameL', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.nameL.setTransform(809.6,401.6,3.57,3.57,0,0,0,50.6,10.5);

	this.nameF = new lib.an_TextInput({'id': 'nameF', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.nameF.setTransform(376.2,403.3,3.57,3.57,0,0,0,50,11);

	this.sexSel_cb = new lib.an_ComboBox({'id': 'sexSel_cb', 'label':'性別を選択してください', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, 男, 1, 女, 2, 秘密, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.sexSel_cb.setTransform(295.7,575.1,2.3,2.3,0,0,0,50,11);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhbCPIAAkdIAoAAIAAD8ICPAAIAAAhg");
	this.shape_47.setTransform(2057.5,482.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhDBSQgbgcAAgzQAAgyAbgfQAbggArAAQAWAAAVALQAVAKALARQAKAQAEAVQADAOAAAfIiXAAQABAgAOATQAOATAcAAQAbAAARgSQAJgLADgNIAjAAQgBALgIAOQgIAOgJAJQgQAQgYAGQgMADgPAAQgnAAgbgdgAA7gRQgCgXgIgOQgOgZgiAAQgXAAgQASQgQARgBAbIByAAIAAAAg");
	this.shape_48.setTransform(2034,486.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ABoBrIAAiQQAAgVgKgIQgKgIgPAAQgWAAgPAOQgPAOAAAgIAAB5IgiAAIAAiHQAAgWgFgKQgIgOgWAAQgUAAgQAPQgQAPAAApIAABuIgjAAIAAjQIAiAAIAAAdQAMgPAKgHQASgMAWAAQAZAAAPANQAIAGAHAOQAMgQAQgJQAQgIATAAQAqAAAPAfQAJAQgBAbIAACLg");
	this.shape_49.setTransform(2006.5,486.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhPBdQgTgSAAgaQAAgdASgQQASgPAegEIA3gHQAMgBAEgJQACgFAAgIQAAgTgMgIQgNgIgXAAQgbAAgMAPQgHAIgBARIghAAQABgnAYgPQAYgQAgAAQAjAAAYAPQAXAOAAAdIAAB4QgBAFADAEQACADAHAAIAGAAIAGgBIAAAaIgNADIgLAAQgTAAgHgNQgFgGgCgNQgLAOgTAKQgUALgYAAQgdAAgSgSgAAYAEIgUAEIgUADQgTADgKAFQgRAJAAAUQAAAPAMAJQALAJAPAAQATAAAQgJQAdgOABggIAAgbQgHADgKACg");
	this.shape_50.setTransform(1979.1,486.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAxBrIAAiDQAAgTgFgLQgKgUgYAAQgMAAgIACQgOAEgLAOQgJAKgDALQgCALAAAVIAABsIgjAAIAAjQIAhAAIAAAdQAPgSAQgIQARgIATAAQAtAAAPAfQAJARAAAgIAACFg");
	this.shape_51.setTransform(1956.5,486.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFC3QgegCgTgPQgTgPACgUQADgTAWgNQAXgMAfACQAfACASAPQATAPgFAUQgCATgWANQgSAKgZAAIgJAAgAgFhYQgegCgTgPQgTgPACgUQADgTAWgNQAXgMAfACQAfACASAPQATAPgFAUQgCATgWANQgSAKgZAAIgJAAg");
	this.shape_52.setTransform(1843.7,462.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgxDFIAAjUQgzAKgxAEQgwACgwgBQB1gmBog0QBngzAvg3IB4BAQgeAbgtAXQgsAWg8ASIAADvg");
	this.shape_53.setTransform(1807.9,460.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AjvC/QBLgsA8g3QA7g4AYgjIgNgHQhqg+gxgVQAvgICIAoIARAGQAgg9AYhOICGAWQgfBYg1BHQAsATBPAyIhDBgQg4g4g5grIgqAmQh2Bgh9AAIgOAAg");
	this.shape_54.setTransform(1755.9,461.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhiCPIAAkeIDGAAIAAAjIigAAIAABYICNAAIAAAhIiNAAIAACCg");
	this.shape_55.setTransform(1682.9,487.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhDBSQgbgcAAgzQAAgyAbgfQAbggArAAQAWAAAVALQAVAKALARQAKAQAEAVQADAOAAAfIiXAAQABAgAOATQAOATAcAAQAbAAARgSQAJgLADgNIAjAAQgBALgIAOQgIAOgJAJQgQAQgYAGQgMADgPAAQgnAAgbgdgAA7gRQgCgXgIgOQgOgZgiAAQgXAAgQASQgQARgBAbIByAAIAAAAg");
	this.shape_56.setTransform(1658.2,491.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ABoBrIAAiQQAAgVgKgIQgKgIgQAAQgUAAgQAOQgPAOABAgIAAB5IgjAAIAAiHQAAgWgFgKQgIgOgWAAQgUAAgQAPQgRAQAAAoIAABuIgjAAIAAjQIAjAAIAAAeQAMgQALgHQARgMAWAAQAZAAAPAMQAIAIAHANQAMgRAPgHQAQgJAUAAQAqAAAQAeQAHARAAAbIAACLg");
	this.shape_57.setTransform(1630.7,490.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhQBdQgSgSAAgaQAAgdASgQQATgPAdgEIA3gHQAMgBAEgJQACgFAAgIQAAgTgMgIQgNgIgXAAQgcAAgLAPQgHAIgBARIghAAQABgnAYgPQAYgQAgAAQAjAAAYAPQAWAOAAAdIAAB4QAAAFADAEQACADAIAAIAEAAIAHgBIAAAaIgNADIgMAAQgRAAgJgNQgEgGgCgNQgKAOgVAKQgSALgZAAQgdAAgTgSgAAYAEIgUAEIgUADQgTADgKAFQgRAJAAAUQAAAPAMAJQALAJAPAAQATAAAQgJQAdgOAAggIAAgbQgGADgKACg");
	this.shape_58.setTransform(1603.3,491.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAxBrIAAiDQAAgTgFgLQgKgUgYAAQgMAAgIADQgOAEgLANQgJAKgDALQgCALAAAVIAABsIgjAAIAAjQIAhAAIAAAeQAPgTAQgIQARgIATAAQAtAAAPAfQAJARAAAgIAACFg");
	this.shape_59.setTransform(1580.7,490.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgFC3QgegCgTgPQgTgPACgUQADgTAWgNQAXgMAfACQAfACASAPQATAPgFAUQgCATgWANQgSAKgZAAIgJAAgAgFhYQgegCgTgPQgTgPACgUQADgTAWgNQAXgMAfACQAfACASAPQATAPgFAUQgCATgWANQgSAKgZAAIgJAAg");
	this.shape_60.setTransform(1469.2,466.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgxDFIAAjUQgzAKgxAEQgwACgwgBQB1gmBog0QBngzAvg3IB4BAQgeAbgtAXQgsAWg8ASIAADvg");
	this.shape_61.setTransform(1433.5,465.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag4C9QhwgDAAh1IAAiSIhCAAIAAg3IBCAAIAAg5IB1AAIAAA5IDxAAQAzAAgHAvQgFAaggAoQgfApheAVQAYhCALgsIACgKIigAAIAACQQgDBEA0gBIDkAAQAAAcgLAOQgLAOgXgBg");
	this.shape_62.setTransform(1381.6,465);

	this.nameL_1 = new cjs.Text("", "bold 80px 'GN-Koharuiro_Sunray'", "#3333CC");
	this.nameL_1.name = "nameL_1";
	this.nameL_1.lineHeight = 82;
	this.nameL_1.lineWidth = 333;
	this.nameL_1.parent = this;
	this.nameL_1.setTransform(1732.6,519.3);

	this.nameF_1 = new cjs.Text("", "bold 80px 'GN-Koharuiro_Sunray'", "#3333CC");
	this.nameF_1.name = "nameF_1";
	this.nameF_1.lineHeight = 82;
	this.nameF_1.lineWidth = 333;
	this.nameF_1.parent = this;
	this.nameF_1.setTransform(1357.3,519.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nameF_1},{t:this.nameL_1},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.sexSel_cb},{t:this.nameF},{t:this.nameL}]},5).wait(36));

	// BT
	this.startBT = new lib.startBT();
	this.startBT.parent = this;
	this.startBT.setTransform(637.2,587.6,1,1,0,0,0,178.3,46.5);
	new cjs.ButtonHelper(this.startBT, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startBT).to({_off:true},5).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1007.1,778.7,540.2,335.4);
// library properties:
lib.properties = {
	width: 1280,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1668436067643", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1668436067643", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1668436067643", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js?1668436067643", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;