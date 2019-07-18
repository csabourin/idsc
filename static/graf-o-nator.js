// Graf-O-nator by Christian Sabourin, LTS, CSPS, Government of Canada
// September 2015
DiagLoadCss('./js/graf-o-nator.css', 'DiagramCss');
var deg2radians = Math.PI * 2 / 360;
function isOdd(num) {
    return num % 2;
}

function roundTo(x) {
    return function(y) {
       return x * (Math.round(y / x));
    };
}

Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
};
RemoveUnits = function(prop) {
    var StringMe = prop.toString();
    var unitsSearch = /([\d]+)/;
    var unitsOnly = StringMe.match(unitsSearch);
    return unitsOnly[0];
};

function rotate(deg, oObj) {
	var Dx, Dy,iecos,iesi, halfWidth,halfHeight;
    var rad = deg * deg2radians ;
    var costheta = Math.cos(rad);
    var sintheta = Math.sin(rad);	
		//get element's size
		halfWidth=oObj.offsetWidth/2;
		halfHeight=oObj.offsetHeight/2;
		Dx=-halfWidth*costheta + halfHeight*sintheta + halfWidth;
		Dy=-halfWidth*sintheta - halfHeight*costheta + halfHeight;
	//console.log("degrees:"+deg);
	var AddtoArray=[],OldH=0,OldW=0,H=0,W=0;

/*	 oObj.style.filter= "progid:DXImageTransform.Microsoft.Chroma(color='white') progid:DXImageTransform.Microsoft.Alpha(opacity=50)";*/
	
if(oObj.children.length>0){
	var oObjChild=oObj.firstChild;
	OldH=(oObjChild.getBoundingClientRect().bottom+oObjChild.scrollTop)-(oObjChild.getBoundingClientRect().top+oObjChild.scrollTop);
	OldW=(oObjChild.getBoundingClientRect().right)-(oObjChild.getBoundingClientRect().left);
	oObjChild.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11=" + costheta + ",M12=" + (-sintheta) + ",M21=" + sintheta + ",M22=" + costheta + ",SizingMethod='auto expand')";	
	H=(oObjChild.getBoundingClientRect().bottom+oObjChild.scrollTop)-(oObjChild.getBoundingClientRect().top+oObjChild.scrollTop);
	W=(oObjChild.getBoundingClientRect().right)-(oObjChild.getBoundingClientRect().left);
	oObjChild.style.filter="progid:DXImageTransform.Microsoft.Matrix(enabled = false)";
	oObjChild.removeAttribute('filter');

	//AddtoArray.push(["width",(W)+'px']);
	//AddtoArray.push(["height",(H)+'px']);
	} else{
		OldH=(oObj.getBoundingClientRect().bottom+oObj.scrollTop)-(oObj.getBoundingClientRect().top+oObj.scrollTop);
		OldW=(oObj.getBoundingClientRect().right)-(oObj.getBoundingClientRect().left);
		//oObj.style.filter="progid:DXImageTransform.Microsoft.Matrix(M11=" + costheta + ",M12=" + (-sintheta) + ",M21=" + sintheta + ",M22=" + costheta + ",SizingMethod='auto expand')";
		H=(oObj.getBoundingClientRect().bottom+oObj.scrollTop)-(oObj.getBoundingClientRect().top+oObj.scrollTop);
		W=(oObj.getBoundingClientRect().right)-(oObj.getBoundingClientRect().left);
	//oObj.style.filter="progid:DXImageTransform.Microsoft.Matrix(enabled = false)";
	//oObj.removeAttribute('filter');
	}
	oObj.style.width=OldW+'px';
	oObj.style.height=OldH+'px';
	AddtoArray.push(["margin-left",(OldW/2-W/2)+'px']);
	AddtoArray.push(["margin-top",(OldH/2-H/2)+'px']);
    AddtoArray.push(["-ms-filter", "\"progid:DXImageTransform.Microsoft.Matrix(M11=" + costheta + ",M12=" + (-sintheta) + ",M21=" + sintheta + ",M22=" + costheta + ",Dx="+Dx+", Dy="+Dy+",SizingMethod='auto expand')\";"]);
	
    return AddtoArray;
}

function DiagLoadCss(DiagUrl, DiagCssId) {
    if (document.getElementById(DiagCssId)) {
        var resetMe = document.getElementById(DiagCssId);
        resetMe.parentNode.removeChild(resetMe);
    }
    if (!document.getElementById(DiagCssId)) {
        var head = document.getElementsByTagName('head')[0];
        var DiagLink = document.createElement('link');
        DiagLink.id = DiagCssId;
        DiagLink.rel = 'stylesheet';
        DiagLink.type = 'text/css';
        DiagLink.href = DiagUrl;
        head.appendChild(DiagLink);
    }
}
var ie = (function() {
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
    return v > 4 ? v : undef;
}());

function addStylesheetRules(rules, cssId) {
    if (document.getElementById(cssId)) { //return true;
        var resetMe = document.getElementById(cssId);
        resetMe.parentNode.removeChild(resetMe);
    }
    if (!document.getElementById(cssId)) {
        var self = this;
        self.element = document.createElement("style");
        self.element.setAttribute('type', 'text/css');
        self.element.setAttribute('id', cssId);
        document.getElementsByTagName("head")[0].appendChild(self.element);
        for (var i = 0, rl = rules.length; i < rl; i++) {
            var j = 1,
                rule = rules[i],
                selector = rules[i][0],
                propStr = '';
            // If the second argument of a rule is an array of arrays, correct our variables.
            if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
                rule = rule[1];
                j = 0;
            }
            for (var pl = rule.length; j < pl; j++) {
                var prop = rule[j];
                propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
            }
            // Insert CSS Rule
            if (ie < 9) {
                self.element.styleSheet.cssText += selector + '{ ' + propStr + "}\r\n";
            } else {
                $('#' + cssId).append(selector + '{ ' + propStr + "}\r\n");
            }
        }
    }
}

function getStyle(el, styleProp) {
    var z = document.getElementById(el);
    if (z.currentStyle) var y = z.currentStyle[styleProp];
    else if (window.getComputedStyle) var yy = document.defaultView.getComputedStyle(z, null).getPropertyValue(styleProp);
    return yy;
}

function getLines(el, ContentChars) {
    var x = 0,
        y = 0,
        FontWidth = 0,
        FontHeight = 0,
        MaxChars = 0,
        ObjMaxlines = 0,
        LineValue = 0,
        LinesGot = 0,
        TotalLines = 0;
    var elmnt = document.getElementById(el);
    var hasRadius = (elmnt.ItemsRadius) ? true : false;
    var LineHeight = parseInt($('#' + el).css('line-height'));
    FontWidth = parseInt($('#' + el).css('font-size'));
    FontHeight = (LineHeight <= FontWidth) ? FontWidth : LineHeight + 2;
    x = (!hasRadius) ? elmnt.scrollWidth - (elmnt.scrollWidth / 100) : elmnt.ItemsRadius - (elmnt.ItemsRadius / 100);
    y = (!hasRadius) ? elmnt.scrollHeight + (elmnt.scrollHeight / 2.5) : elmnt.ItemsRadius;
    //console.log('line-height' + FontHeight + ' font-size:' + FontWidth);
    MaxChars = Math.ceil(x / FontWidth * 1.5);
    ObjMaxlines = Math.floor(y / FontHeight) - 1;
    TotalLines = (Math.ceil(ContentChars / MaxChars));
    LineValue = (ObjMaxlines / 2) - (TotalLines / 2);
    LinesGot = (LineValue * 2 + TotalLines == ObjMaxlines) ? LineValue : LineValue + (ObjMaxlines - (2 * LineValue + TotalLines)) + 2.5;
    //console.log((LinesGot * 2 + TotalLines) + " ObjMaxlines:" + ObjMaxlines);
    if (LinesGot * 2 + TotalLines != ObjMaxlines - 1) LinesGot += (ObjMaxlines - (2 * LinesGot + TotalLines));
    if (ObjMaxlines % 2 == 0 && LineValue % 2 == 0 && LinesGot * 2 + TotalLines == ObjMaxlines) LinesGot -= .5;
    //console.log(el + " LinesGot:" + LinesGot + " x:" + x + " y:" + y + " ContentChars:" + ContentChars + " MaxChars:" + MaxChars + " FontWidth:" + FontWidth + " FontHeight:" + FontHeight + " TotalLines:" + TotalLines + " ObjMaxlines:" + ObjMaxlines + " LineValue:" + LineValue);
    return LinesGot;
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMidPoint( /*int*/ x, /*int*/ y, /*int*/ width, /*int*/ height, /*int*/ angle) {
    width = width / 2;
    height = height / 2
    var dist = Math.sqrt((Math.pow(width, 2)) + (Math.pow(height, 2)));
    var degtorad = Math.PI / 180;
    x += Math.cos(degtorad * (45 + angle)) * dist;
    y += Math.sin(degtorad * (45 + angle)) * dist;
    return {
        px: x,
        py: y
    };
}

function vAlignChild(elem) {
    var j, c = 0,
        goThrough = (elem) ? elem : '.gOn-valign';
    $(goThrough).each(function(j) {
        var ParentsUnits = 0,
            vCenterParent = 0,
            parentTag = 0,
            ParentBottomPadding = 0,
            childHeight = 0,
            ParentTopPadding = 0,
            ParentHeight = 0;
        c++;
        var ParentText = $(this).parent();
        var ParentObj = getText($(this).get(0));
        //console.log(ParentObj);
        if (!$(this).parent().attr("id")) {
            $(this).parent().attr('id', "Align_Parent_" + c);
        }
        parentTag = $(this).parent().attr("id");
        //console.log(parentTag);
        vCenterParent = getLines(parentTag, ParentObj.ActualSize);
        if (!ParentObj.sizeIsSet) {
            ParentsUnits = (ie < 9) ? "px" : "em";
            if (vCenterParent % 2 !== 0) vCenterParent += vCenterParent;
            //$('#' + parentTag + " .gOn-valign").css("padding-top", (vCenterParent) + ParentsUnits);
            ParentBottomPadding = parseInt($('#' + parentTag).css('padding-bottom'));
            ParentHeight = parseInt($('#' + parentTag).get(0).clientHeight + 1);
            //var childHeight = $(this).scrollHeight;
            childHeight = ($(this).get(0).clientHeight + 1);
            //var width = (oPlaceName.clientWidth + 1) + "px";
            $(this).css("padding-top", ParentHeight / 2 - childHeight / 2 + "px");
            $(this).css("padding-bottom", ParentBottomPadding - childHeight + "px")
        }
    })
}

function getText(ListArray) {
    var ActualContent = "",
        ActualSize = 0,
        TextLength = 0,
        sizeWithUnit = "",
        sizeIsSet = false,
        getRaw = "";
    if (ListArray.textContent !== '' || ListArray.innerText !== '') {
        if (ListArray.textContent) {
            TextLength = ListArray.textContent.length
            getRaw = ListArray.textContent;
            ActualContent = getRaw.replace(/[\s][\s]/g, "");
            ActualSize = ActualContent.length;
        } else if (ListArray.innerText) {
            TextLength = ListArray.innerText.length;
            getRaw = ListArray.innerText;
            ActualContent = getRaw.replace(/[\s][\s]/g, "");
            ActualSize = ActualContent.length;
        }
        if (ListArray.getAttribute("data-size")) {
            sizeWithUnit = ListArray.getAttribute("data-size");
            sizeIsSet = true;
        }
    } else {
        this.ActualContent = "";
        this.ActualSize = 0;
    }
    return {
        ActualContent: ActualContent,
        ActualSize: ActualSize,
        sizeWithUnit: sizeWithUnit,
        sizeIsSet: (sizeIsSet) ? sizeIsSet : undefined
    };
}

function CreateMasterlist(ListId) {
    var Master = document.getElementById(ListId),
        subMaster = Master.getElementsByTagName('li');
    this.ListItems = Master.getElementsByTagName('li');
    this.ListLength = subMaster.length;
    this.ActualContent = [];
    this.ActualSize = [];
    this.sizeIsSet = [];
    var ListArraw = {};
    this.avgSize = function() {
        this.sizeWithUnit = [];
        var c = [],
            cc = 0,
            j = 0,
            getRaw = "",
            TextLength = 0;
        for (j = 0; j < subMaster.length; j++) {
            ListArraw = getText(subMaster[j]);
            this.ActualContent[j] = ListArraw.ActualContent;
            this.ActualSize[j] = ListArraw.ActualSize;
            this.sizeWithUnit[j] = ListArraw.sizeWithUnit;
            this.sizeIsSet[j] = ListArraw.sizeIsSet;
            c.push(this.ActualSize[j]);
            cc++
        }
        var d = parseInt((getMaxOfArray(c) / Math.PI) - Math.PI - 1);
        return d;
    }
}

function grafOnator(gOnParams) {
    this.ListId = (gOnParams.ListId) ? gOnParams.ListId : $('li:has(p)').parent().id;
    this.CurrPage = (gOnParams.CurrPage) ? gOnParams.CurrPage : Math.random() * (9999 - 1000) + 1000;
    var parentElem = (gOnParams.parentElem) ? gOnParams.parentElem : $('ul:not(has:(li))').id;
    var putOnTop = (gOnParams.putOnTop) ? gOnParams.putOnTop : false;
	this.idPrefix = (gOnParams.idPrefix) ? gOnParams.idPrefix : "diag";
    this.BaseClassName = (gOnParams.BaseClassName) ? gOnParams.BaseClassName : "Diag";
    this.ExtraClassName = (gOnParams.ExtraClassName) ? gOnParams.ExtraClassName : undefined;
    var CustomMargins = (gOnParams.CustomMargins) ? gOnParams.CustomMargins : undefined;
    var radius = (gOnParams.radius) ? gOnParams.radius : 120;
    this.tunrOffset = (gOnParams.tunrOffset) ? gOnParams.tunrOffset*deg2radians : 0;
    this.addArrows = (gOnParams.addArrows) ? gOnParams.addArrows : undefined;
    var TotalLines = '',
	round5=roundTo(5),
        modelItem = '',
        i = 0,
        FlatClean = 0,
        selectors = 0,
        InstanceName = '',
        AdjustedPadding = 0,
        BaseFontSize = 16,
        itemSize = "0px",
        runTwice = false,
        RotateClean = 0;
    var MyStyleSheet = [];
    MyStyleSheet[selectors] = [];
    var StyleArray = [];
    var bodyHeight = document.getElementsByTagName('body')[0].scrollHeight;
    var parentdiv = document.getElementById(parentElem);	
	if (putOnTop){var dupNode = parentdiv.cloneNode(true);}
    parentdiv.className += ' Diag_parent';
    var parentHeight = parentdiv.clientHeight;
    Masterlist = new CreateMasterlist(this.ListId);
    var avgSize = Masterlist.avgSize();
    var circles = Masterlist.ListLength;
    var ItemsRadius = Math.round(2 * radius * Math.tan(Math.PI / circles));
    this.create = function() {
		
        if (this.addArrows.ShowArrows === true) {
			var iEGoodStyleArr=[];
            MyStyleSheet[selectors].push('.' + "Diag-Arrow");
            MyStyleSheet[selectors][1] = [];
            MyStyleSheet[selectors][1].push(["list-style", "none"]);
            MyStyleSheet[selectors][1].push(["position", "absolute"]);
            MyStyleSheet[selectors][1].push(["line-height", ".5em"]);
            MyStyleSheet[selectors][1].push(["text-align", "center"]);
            MyStyleSheet[selectors][1].push(["font-size", (this.addArrows.FontSize) ? this.addArrows.FontSize : this.addArrows.FontSize = "48px"]);
            selectors++;
            MyStyleSheet[selectors] = [];
            var altRadius = (this.addArrows.DifferentRadius) ? this.addArrows.DifferentRadius : 1;
            var BaseList = document.getElementById(this.ListId);
            var arrowList = (BaseList.getAttribute("data-arrows")) ? BaseList.getAttribute("data-arrows") : "";
            runTwice = true;
            var SecondTurn = false;
            radius += (ie < 9) ? Math.pow(BaseList.children.length , 2) : BaseList.childElementCount * BaseList.childElementCount;
            ItemsRadius -= Math.pow(BaseList.children.length, 3);
        }
        var increase = Math.PI * 2 / circles;
        var PointTo = (this.addArrows.Angles) ? this.addArrows.Angles : 0;
        var PointWhere = (PointTo[0]) ? PointTo[0] : PointTo;
        var PointDown = (PointTo[1]) ? PointTo[1] : PointTo;
        var div = 360 / Masterlist.ListLength;
        var angle = div + (increase * this.tunrOffset);
        var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
        var containerHeight = (CustomMargins) ? CustomMargins[0] - CustomMargins[1] : offsetToParentCenter / 2 + radius * 2 + avgSize * 4 + BaseFontSize * 2;
        var AdjContent = ItemsRadius;
        if (!parentdiv.parentNode.id) var grandParent = parentdiv.parentNode.id = parentElem + "_parent";
        MyStyleSheet[selectors].push('#' + grandParent);
        MyStyleSheet[selectors][1] = [];
        MyStyleSheet[selectors][1].push(["min-height", (containerHeight) + "px"]);
        selectors++;
        MyStyleSheet[selectors] = [];
        MyStyleSheet[selectors].push(".smallview #" + grandParent + ", .xsmallview #" + grandParent + ", .xxsmallview #" + grandParent);
        MyStyleSheet[selectors][1] = [];
        MyStyleSheet[selectors][1].push(["min-height", 3 + "em"]);
        if ($('#' + parentElem).children().hasClass('gOn-valign')) {
            ParentText = '#' + parentElem + ' .gOn-valign'
            vAlignChild(ParentText);
        }
        selectors++;
        MyStyleSheet[selectors] = [];
        MyStyleSheet[selectors].push('#' + parentElem);
        MyStyleSheet[selectors][1] = [];
        var ParentMargin = (CustomMargins) ? CustomMargins : [parseInt(radius + (ItemsRadius / Math.PI / 2)), parseInt(radius + (ItemsRadius / Math.PI / 2))];
        MyStyleSheet[selectors][1].push(["margin-top", ParentMargin[0] + BaseFontSize * 2 + "px"]);
        MyStyleSheet[selectors][1].push(["margin-bottom", ParentMargin[1] + BaseFontSize + "px"]);
        selectors++;
        MyStyleSheet[selectors] = [];
        MyStyleSheet[selectors].push('.debug #' + parentElem + ":after");
        MyStyleSheet[selectors][1] = [];
        MyStyleSheet[selectors][1].push(["display", "block"]);
        MyStyleSheet[selectors][1].push(["position", "absolute"]);
        MyStyleSheet[selectors][1].push(["z-index", "3"]);
        MyStyleSheet[selectors][1].push(["font-size", "small"]);
        MyStyleSheet[selectors][1].push(["border", "1px solid blue"]);
        selectors++;
        for (i = 0; i < circles; i++) {
            if (Masterlist.ActualSize[i] && Masterlist.ActualSize[i] !== 0) {
                modelItem = Masterlist.ListItems[i];
                MyStyleSheet[selectors] = [];
                childdiv = document.createElement('li');
                childdiv.id = InstanceName = (SecondTurn) ? 'Arrow_' + this.idPrefix + '-' + i : this.idPrefix + '-' + i;
                MyStyleSheet[selectors].push('#' + InstanceName);
                MyStyleSheet[selectors][1] = [];
				if (!SecondTurn) childdiv.ItemsRadius = (Masterlist.sizeWithUnit[i]) ? RemoveUnits(Masterlist.sizeWithUnit[i]) : ItemsRadius;
                childdiv.className = (SecondTurn) ? 'Diag-Arrow ' : 'Diag ';
                childdiv.className += (SecondTurn) ? this.BaseClassName + '-Arrow ' : this.BaseClassName;
                if (!SecondTurn) childdiv.className += " " + this.ExtraClassName;
                if (!SecondTurn && modelItem.getAttribute("class")) childdiv.className += " " + modelItem.getAttribute("class");
                childdiv.innerHTML = (SecondTurn) ? arrowList : modelItem.innerHTML;
                if (modelItem.getAttribute("aria-label")) childdiv.setAttribute('aria-label', modelItem.getAttribute("aria-label"));
                if (modelItem.getAttribute("aria-label")) childdiv.setAttribute('title', modelItem.getAttribute("aria-label"));
                if (modelItem.getAttribute("role")) childdiv.setAttribute('role', modelItem.getAttribute("role"));
                var y = (SecondTurn) ? parseInt(Math.sin(angle) * altRadius) : parseInt(Math.sin(angle) * radius);
                var x = (SecondTurn) ? parseInt(Math.cos(angle) * altRadius) : parseInt(Math.cos(angle) * radius);
				parentdiv.appendChild(childdiv);
				var DiagInstance = document.getElementById(InstanceName);
				var rotationCalc = round5(parseInt(PointWhere + (57.2957795 * Math.atan2(y * Math.PI, x * Math.PI)))); // Rotation angle for arrows in degrees
				if (this.addArrows.TurnWithGraph && SecondTurn) {
                    RotateClean = rotationCalc.mod(360);
                    DiagInstance.setAttribute("data-angle", RotateClean);
                    MyStyleSheet[selectors][1].push(['z-index', 1]);
                    MyStyleSheet[selectors][1].push(['transform', 'rotate(' + RotateClean + "deg)"]);
                    MyStyleSheet[selectors][1].push(['-moz-transform', 'rotate(' + RotateClean + "deg)"]);
                    MyStyleSheet[selectors][1].push(['-webkit-transform', 'rotate(' + RotateClean + "deg)"]);
                    MyStyleSheet[selectors][1].push(['-o-transform', 'rotate(' + RotateClean + "deg)"]);
                    MyStyleSheet[selectors][1].push(['-ms-transform', 'rotate(' + RotateClean + "deg)"]);
                    if (ie < 9) {iEGoodStyleArr=rotate(RotateClean, DiagInstance);
						for(var k=0;k<iEGoodStyleArr.length;k++){
							//console.log(iEGoodStyleArr[k][0]+":"+iEGoodStyleArr[k][1])
							MyStyleSheet[selectors][1].push([iEGoodStyleArr[k][0],iEGoodStyleArr[k][1]]);
						}}
                }
				
                
				if (SecondTurn && DiagInstance.children.length>0){
				var Ha=(DiagInstance.childNodes[0].getBoundingClientRect().bottom+DiagInstance.childNodes[0].scrollTop)-(DiagInstance.childNodes[0].getBoundingClientRect().top+DiagInstance.childNodes[0].scrollTop);
				var Wa=(DiagInstance.childNodes[0].getBoundingClientRect().right)-(DiagInstance.childNodes[0].getBoundingClientRect().left);
				} else if (SecondTurn){
					var Ha=(Ha=(DiagInstance.getBoundingClientRect().bottom)-(DiagInstance.getBoundingClientRect().top)===0)?Ha:DiagInstance.offsetParent.clientHeight;
					var Wa=(Wa=(DiagInstance.getBoundingClientRect().right)-(DiagInstance.getBoundingClientRect().left)===0)?Wa:DiagInstance.offsetParent.clientWidth;}
				itemSize = (SecondTurn) ? /*this.addArrows.FontSize*/'0px' : AdjContent + "px"
                var offsetToChildXCenter = (SecondTurn) ? Wa / 2 : AdjContent / 2;
				var offsetToChildYCenter = (SecondTurn) ? Ha / 2 : AdjContent / 2;
                var totalYOffset = offsetToParentCenter - offsetToChildYCenter;
				var totalXOffset = offsetToParentCenter - offsetToChildXCenter;
					  if (!SecondTurn && modelItem.getAttribute("data-size")) {
                    itemSize = modelItem.getAttribute("data-size");
                    offsetToChildYCenter = RemoveUnits(itemSize) / 2;
                    totalXOffset = totalYOffset = offsetToParentCenter - offsetToChildYCenter;
                }
                
                if (modelItem.getAttribute("data-diagimage")) MyStyleSheet[selectors][1].push(['background-image', 'url(' + modelItem.getAttribute("data-diagimage") + ')']);
                MyStyleSheet[selectors][1].push(['top', parseInt((y + totalYOffset), 10) + "px"]);
                MyStyleSheet[selectors][1].push(['left', parseInt((x + totalXOffset), 10) + "px"]);
                MyStyleSheet[selectors][1].push(['width', (SecondTurn) ? Wa +'px': itemSize]);
                MyStyleSheet[selectors][1].push(['height', (SecondTurn) ? Ha+'px' : itemSize]);
                if (!SecondTurn) {
                    AdjustedPadding = getLines(InstanceName, Masterlist.ActualSize[i]);
                    DiagInstance.AdjustedPadding = AdjustedPadding;
                    selectors++;
                    MyStyleSheet[selectors] = [];
                    MyStyleSheet[selectors].push('#' + InstanceName + " p");
                    MyStyleSheet[selectors][1] = [];
                    MyStyleSheet[selectors][1].push(['padding-top', AdjustedPadding + "em"]);
                    selectors++;
                    MyStyleSheet[selectors] = [];
                    MyStyleSheet[selectors].push(".smallview #" + InstanceName + " p, .xsmallview #" + InstanceName + " p, .xxsmallview #" + InstanceName + " p");
                    MyStyleSheet[selectors][1] = [];
                    MyStyleSheet[selectors][1].push(['padding', '0.5em']);
                    MyStyleSheet[selectors][1].push(['margin', '0.5em']);
                }
                selectors++;
                MyStyleSheet[selectors] = [];
                MyStyleSheet[selectors].push(".smallview #" + parentElem + ", .xsmallview #" + parentElem + ", .xxsmallview #" + parentElem);
                MyStyleSheet[selectors][1] = [];
                MyStyleSheet[selectors][1].push(['margin-top', '1em', true]);
                MyStyleSheet[selectors][1].push(['margin-bottom', '1em', true]);
                MyStyleSheet[selectors][1].push(['width', '100%']);
                MyStyleSheet[selectors][1].push(['height', 'auto']);
                MyStyleSheet[selectors][1].push(['padding', '1em']);
                MyStyleSheet[selectors][1].push(['text-align', 'center']);
                selectors++;
                MyStyleSheet[selectors] = [];
                MyStyleSheet[selectors].push(".smallview #" + InstanceName + ", .xsmallview #" + InstanceName + ", .xxsmallview #" + InstanceName);
                MyStyleSheet[selectors][1] = [];
                MyStyleSheet[selectors][1].push(['position', 'relative']);
                MyStyleSheet[selectors][1].push(['display', 'inline-block']);
                MyStyleSheet[selectors][1].push(['top', '0px']);
                MyStyleSheet[selectors][1].push(['left', (SecondTurn) ? '0px' : '0px']);
                MyStyleSheet[selectors][1].push(['margin-left', (SecondTurn) ? 'auto' : '0px']);
                MyStyleSheet[selectors][1].push(['margin-right', (SecondTurn) ? 'auto' : '0px']);
                MyStyleSheet[selectors][1].push(['width', (SecondTurn) ? '1em' : '100%']);
                MyStyleSheet[selectors][1].push(['border-radius', '0%']);
                if (!SecondTurn) MyStyleSheet[selectors][1].push(['height', (Masterlist.sizeIsSet[i]) ? Masterlist.sizeWithUnit[i] : 'auto']);
                if (!SecondTurn) MyStyleSheet[selectors][1].push(['border', '1px solid #000']);
                if (runTwice) {
                    if (SecondTurn) {
                        
                        FlatClean = PointDown.mod(360);
                        MyStyleSheet[selectors][1].push(['margin-top', '0.25em']);
                        MyStyleSheet[selectors][1].push(['margin-bottom', '0.25em']);
                        MyStyleSheet[selectors][1].push(['-moz-transform', "rotate(" + FlatClean + "deg)"]);
                        MyStyleSheet[selectors][1].push(['-webkit-transform', "rotate(" + FlatClean + "deg)"]);
                        MyStyleSheet[selectors][1].push(['-o-transform', "rotate(" + FlatClean + "deg)"]);
                        MyStyleSheet[selectors][1].push(['-ms-transform', "rotate(" + FlatClean + "deg)"]);
                        if (i == circles - 1 || Masterlist.ActualSize[i + 1] === 0) MyStyleSheet[selectors][1].push(['display', 'none', true]);
                        if (ie < 9) {var iEStyleArr=rotate(FlatClean, DiagInstance);
						for(var g=0;g<iEStyleArr.length;g++){
							MyStyleSheet[selectors][1].push([iEStyleArr[g][0],iEStyleArr[g][1]]);
						}}
							
                        MyStyleSheet[selectors][1].push(['transform', "rotate(" + FlatClean + "deg)"]);
                        angle -= (this.addArrows.arrowOffset) ? ((increase + this.addArrows.arrowOffset*deg2radians) / 2) : increase / 2
                        angle += increase;
                        SecondTurn = false;
                    } else {
                        SecondTurn = true;
                        i--;
                        angle += (this.addArrows.arrowOffset) ? ((increase + this.addArrows.arrowOffset*deg2radians) / 2) : (increase / 2);
                    }
                } else {
                    angle += increase;
                }
                if (!SecondTurn) {
                    selectors++;
                    MyStyleSheet[selectors] = [];
                    MyStyleSheet[selectors].push('.debug #' + InstanceName + ":after");
                    MyStyleSheet[selectors][1] = [];
                    MyStyleSheet[selectors][1].push(["display", "block"]);
                    MyStyleSheet[selectors][1].push(["position", "absolute"]);
                    MyStyleSheet[selectors][1].push(["width", "20em"]);
                    MyStyleSheet[selectors][1].push(["line-height", "1.25em"]);
                    if (!SecondTurn) MyStyleSheet[selectors][1].push(["-webkit-transform", "rotate(" + -RotateClean + "deg)"]);
                    MyStyleSheet[selectors][1].push(["z-index", "3"]);
                    MyStyleSheet[selectors][1].push(["background-color", "rgba(255,255,255,.25)"]);
                    MyStyleSheet[selectors][1].push(["top", "-3em"]);
                    MyStyleSheet[selectors][1].push(["right", "15em"]);
                    MyStyleSheet[selectors][1].push(["font-size", "small"]);
                    MyStyleSheet[selectors][1].push(["content", "'AdjustedPadding:"+AdjustedPadding+" Maxlines:" + TotalLines.Maxlines +" TotalLines:" + TotalLines.value + " itemSize:"+Masterlist.sizeWithUnit[i]+" x:" + x + " y:" + y + " ActualContent:"+Masterlist.ActualContent[i]+"'"]);
                    MyStyleSheet[selectors][1].push(["border", "1px solid green"]);
                }
                selectors++;
            }
        }
        addStylesheetRules(MyStyleSheet, 'addedCSS_' + this.CurrPage);
        var Master = document.getElementById(this.ListId);
        Master.parentNode.removeChild(Master);
		if (putOnTop){	
		var tempName=dupNode.getAttribute('id');
		dupNode.setAttribute('id',tempName+'-zTop');
		dupNode.className +=" hidden-xs hidden-sm";
		parentdiv.appendChild(dupNode);
		}
    }
}