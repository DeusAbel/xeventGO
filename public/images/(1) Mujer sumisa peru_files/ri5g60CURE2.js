if (self.CavalryLogger) { CavalryLogger.start_js(["o69oy"]); }

__d('BucketedTypeaheadView',['fbt','DOM','TypeaheadView'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('TypeaheadView'));j=i&&i.prototype;k.prototype.render=function(l,m,n,o){'use strict';var p=m.length>0;for(var q=0;q<m.length;++q)if(m[q].type!=='hashtag')p=false;if(!p)m=this.buildBuckets(l,m);if(n&&o){var r=this.results.length-this.index;this.index=m.length-r;}return j.render.call(this,l,m,n);};k.prototype.highlight=function(l,m){'use strict';this.headerIndex=false;if(l==-1&&this.index!==0)l=this.index;while(l>=0&&l<this.items.length&&!this.isHighlightable(this.results[l])){l=l+1;this.headerIndex=true;}j.highlight.call(this,l,m);};k.prototype.buildBuckets=function(l,m){'use strict';if(!this.typeObjects||!m||!m.length)return m;var n=[],o={};for(var p=0;p<m.length;++p){var q=m[p],r=q.render_type||q.type;if(!o.hasOwnProperty(r)){o[r]=n.length;n.push([this.buildBucketHeader(r)]);}q.classNames=q.classNames||r;q.groupIndex=o[r];q.indexInGroup=n[q.groupIndex].length-1;q.globalIndex=p;n[q.groupIndex].push(q);}for(r in this.typeObjects)if(!o.hasOwnProperty(r)&&this.typeObjects[r].show_always){o[r]=n.length;n.push([this.buildBucketHeader(r)]);q=this.buildNoResultsEntry();q.classNames=q.type;q.groupIndex=o[r];q.indexInGroup=n[q.groupIndex].length-1;n[q.groupIndex].push(q);}var s=[];if(this.typeObjectsOrder){for(var t=0;t<this.typeObjectsOrder.length;++t){var u=this.typeObjectsOrder[t];if(o.hasOwnProperty(u))s=s.concat(n[o[u]]);}}else for(var v=0;v<n.length;++v)s=s.concat(n[v]);return s;};k.prototype.buildNoResultsEntry=function(){'use strict';return {uid:'disabled_result',type:'disabled_result',text:h._("No hay resultados")};};k.prototype.buildBucketHeader=function(l){'use strict';var m=this.typeObjects[l];if(m===undefined)throw new Error(l+" is undefined in "+JSON.stringify(this.typeObjects));if(m.markup){m.text=m.markup;delete m.markup;}return this.typeObjects[l];};k.prototype.buildResults=function(l){'use strict';var m=j.buildResults.call(this,l);if(this.typeObjects){return c('DOM').create('div',{className:'bucketed'},[m]);}else return m;};k.prototype.isHighlightable=function(l){'use strict';return l.type!='header'&&l.type!='disabled_result';};k.prototype.select=function(l){'use strict';var m=this.results[this.index];if(m&&this.isHighlightable(m))j.select.call(this,l);};k.prototype.updateResults=function(l){'use strict';this.results=l;};k.prototype.normalizeIndex=function(l){'use strict';var m=this.results.length;if(m===0){return -1;}else if(l<-1){return l%m+m+1;}else if(l>=m){return l%m-1;}else return l;};k.prototype.getDefaultIndex=function(l){'use strict';var m=this.autoSelect&&!this.disableAutoSelect;if(this.index<0&&!m)return -1;if(l.length===0)return -1;var n=0;while(!this.isHighlightable(l)&&n<l.length)n++;return n;};k.prototype.prev=function(){'use strict';var l=this.results[this.normalizeIndex(this.index-1)];while(l&&!this.isHighlightable(l)){this.index=this.normalizeIndex(this.index-1);l=this.results[this.normalizeIndex(this.index-1)];}return j.prev.call(this);};k.prototype.next=function(){'use strict';var l=this.results[this.normalizeIndex(this.index+1)];while(l&&!this.isHighlightable(l)){this.index=this.normalizeIndex(this.index+1);l=this.results[this.normalizeIndex(this.index+1)];}return j.next.call(this);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('ContextualTypeaheadView',['BucketedTypeaheadView','CSS','ContextualLayer','ContextualLayerAutoFlip','ContextualLayerHideOnScroll','DOM','DOMDimensions','Style'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('BucketedTypeaheadView'));i=h&&h.prototype;j.prototype.init=function(){'use strict';this.initializeLayer();i.init.call(this);};j.prototype.initializeLayer=function(){'use strict';this.context=this.getContext();this.wrapper=c('DOM').create('div');c('DOM').appendContent(this.wrapper,this.element);c('CSS').addClass(this.element,'uiContextualTypeaheadView');this.layer=new (c('ContextualLayer'))({context:this.context,position:'below',alignment:this.alignment,causalElement:this.causalElement,permanent:true,shouldSetARIAProperties:false},this.wrapper);this.layer.enableBehavior(c('ContextualLayerHideOnScroll'));if(c('Style').isFixed(this.context)||this.autoflip)this.layer.enableBehavior(c('ContextualLayerAutoFlip'));this.subscribe('render',this.renderLayer.bind(this));};j.prototype.show=function(){'use strict';if(this.minWidth){c('Style').set(this.wrapper,'min-width',this.minWidth+'px');}else if(this.width){c('Style').set(this.wrapper,'width',this.width+'px');}else c('Style').set(this.wrapper,'width',c('DOMDimensions').getElementDimensions(this.context).width+'px');var k=i.show.call(this);this.layer.show();this.inform('show');return k;};j.prototype.hide=function(){'use strict';this.layer.hide();this.inform('hide');return i.hide.call(this);};j.prototype.renderLayer=function(){'use strict';if(!this.isVisible())return;if(this.layer.isShown()){this.layer.updatePosition();}else this.layer.show();};j.prototype.clearText=function(){'use strict';this.layer.getCausalElement().value='';};j.prototype.getContext=function(){'use strict';return this.element.parentNode;};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('StickyPlaceholderInput',['Event','CSS','DOM','Input','Parent','emptyFunction','getElementText'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l){return c('Parent').byClass(l,'uiStickyPlaceholderInput');}function i(l){return c('DOM').scry(l,'.placeholder')[0];}function j(l){l=l||window.event;var m=l.target||l.srcElement;if(c('DOM').isNodeOfType(m,['input','textarea'])){var n=h(m);if(n)setTimeout(function(){c('CSS').conditionClass(n,'uiStickyPlaceholderEmptyInput',!m.value.length);},0);}}var k={init:function l(){k.init=c('emptyFunction');c('Event').listen(document.documentElement,{keydown:j,keyup:j,paste:j,focusout:j});},registerInput:function l(m){k.init();var n=m.getAttribute('placeholder')||'';if(n.length)if(document.activeElement===m){var o=c('Event').listen(m,'blur',function(){k.manipulateInput(m,n);o.remove();});}else k.manipulateInput(m,n);},manipulateInput:function l(m,n){var o=c('DOM').create('div',{className:'placeholder','aria-hidden':'true'},n),p=c('DOM').create('div',{className:'uiStickyPlaceholderInput'},o);if(c('DOM').isNodeOfType(m,'textarea'))c('CSS').addClass(p,'uiStickyPlaceholderTextarea');c('Event').listen(o,'click',function(){m.focus();});if(m.value===n)m.value='';m.setAttribute('placeholder','');c('DOM').replace(m,p);c('DOM').appendContent(p,m);c('CSS').conditionClass(p,'uiStickyPlaceholderEmptyInput',!m.value.length);},setPlaceholderText:function l(m,n){var o=h(m);if(!o){c('Input').setPlaceholder(m,n);}else{var p=i(o);p&&c('DOM').setContent(p,n);}},getPlaceholderText:function l(m){var n=h(m),o=i(n);return o&&c('getElementText')(o);},update:function l(m){var n=h(m);if(n)c('CSS').conditionClass(n,'uiStickyPlaceholderEmptyInput',!m.value.length);},getVisibleText:function l(m){var n=h(m);if(c('CSS').hasClass(n,'uiStickyPlaceholderEmptyInput')){var o=i(n);return o&&c('getElementText')(o);}else return m.value;}};f.exports=k;}),null);
__d('TypeaheadCore',['Arbiter','ArbiterMixin','CSS','DOM','Event','Focus','Input','InputSelection','Keys','StickyPlaceholderInput','UserAgent','bind','emptyFunction','mixin'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.events=['blur','focus','click','unselect','loading','change'];this.keepFocused=true;this.preventFocusChangeOnTab=false;this.queryTimeout=250;this.resetOnKeyup=true;this.resetOnSelect=false;this.setValueOnSelect=false;Object.assign(this,k);}j.prototype.init=function(k,l,m){'use strict';this.init=c('emptyFunction');this.data=k;this.view=l;this.root=m;this.initInput();this.inputWrap=c('DOM').find(m,'div.wrap');this.hiddenInput=c('DOM').find(m,'input.hiddenInput');this.value='';this.nextQuery=null;this.selectedText=null;if(this.setValueOnSelect&&c('CSS').hasClass(this.inputWrap,'selected'))this.selectedText=this.getValue();this.initView();this.initData();this.initEvents();this.initToggle();this._exclusions=[];};j.prototype.initInput=function(){'use strict';this.element=c('DOM').find(this.root,'.textInput');var k=c('DOM').scry(this.element,'input')[0];if(k)this.element=k;};j.prototype.initView=function(){'use strict';this.view.subscribe('highlight',c('Focus').set.bind(null,this.element));this.view.subscribe('select',function(k,l){this.select(l.selected);}.bind(this));this.view.subscribe('afterSelect',function(){this.afterSelect();}.bind(this));};j.prototype.initData=function(){'use strict';this.data.subscribe('notify',function(k,l){if(this.root.id==l.rootid&&!this.element.disabled&&l.value==this.getValue())this.view.render(l.value,l.results,l.isAsync);}.bind(this));this.data.subscribe('respond',function(k,l){if(l.forceDisplay||l.value==this.getValue()&&!this.element.disabled&&(this.element.getAttribute('singlestate')!=='true'||l.nullState))this.view.render(l.value,l.results,l.isAsync);}.bind(this));this.data.subscribe('activity',function(k,l){this.fetching=l.activity;if(!this.fetching)this.nextQuery&&this.performQuery();if(this.loading!=this.fetching){this.loading=this.fetching;this.inform('loading',{loading:this.loading});}}.bind(this));};j.prototype.initEvents=function(){'use strict';c('Event').listen(this.view.getElement(),{mouseup:this.viewMouseup.bind(this),mousedown:this.viewMousedown.bind(this)});var k={blur:c('bind')(this,'blur'),focus:c('bind')(this,'focus'),click:c('bind')(this,'click'),keyup:c('bind')(this,'keyup'),keydown:c('bind')(this,'keydown'),keypress:c('bind')(this,'keypress')};if(c('UserAgent').isBrowser('Firefox'))c('Event').listen(this.element,{input:k.keyup});c('Event').listen(this.element,k);};j.prototype.initToggle=function(){'use strict';this.subscribe('blur',this.view.hide.bind(this.view));this.subscribe('focus',this.view.show.bind(this.view));};j.prototype.viewMousedown=function(){'use strict';this.selecting=true;};j.prototype.viewMouseup=function(){'use strict';this.selecting=false;};j.prototype.blur=function(){'use strict';if(this.selecting){this.selecting=false;return;}this.inform('blur');};j.prototype.click=function(){'use strict';var k=c('InputSelection').get(this.element);if(k.start==k.end)this.element.select();this.inform('click');};j.prototype.focus=function(){'use strict';this.checkValue();this.inform('focus');};j.prototype.keyup=function(){'use strict';if(this.resetOnKeyup&&!this.getValue())this.view.reset();this.checkValue();if(this.getValue().length===0)this.inform('change',null);};j.prototype.keydown=function(event){'use strict';if(!this.view.isVisible()||this.view.isEmpty()){setTimeout(this.checkValue.bind(this),0);return;}switch(c('Event').getKeyCode(event)){case c('Keys').TAB:this.handleTab(event);return;case c('Keys').UP:this.view.prev();break;case c('Keys').DOWN:this.view.next();break;case c('Keys').ESC:this.view.reset();break;default:setTimeout(this.checkValue.bind(this),0);return;}event.kill();};j.prototype.keypress=function(event){'use strict';if(this.view.getSelection()&&c('Event').getKeyCode(event)==c('Keys').RETURN){this.view.select();event.kill();}};j.prototype.handleTab=function(event){'use strict';if(this.preventFocusChangeOnTab)if(this.view.getSelection()){event.kill();}else event.prevent();this.view.select();};j.prototype.select=function(k){'use strict';if(k&&this.setValueOnSelect){var l=k.orig_text||k.text;this.setValue(l);this.setHiddenValue(k.uid);this.selectedText=l;c('CSS').addClass(this.inputWrap,'selected');}};j.prototype.afterSelect=function(){'use strict';this.keepFocused?c('Focus').set(this.element):this.element.blur();this.resetOnSelect?this.reset():this.view.reset();};j.prototype.unselect=function(){'use strict';if(this.setValueOnSelect){this.selectedText=null;c('CSS').removeClass(this.inputWrap,'selected');}this.setHiddenValue();this.inform('unselect',this);};j.prototype.setEnabled=function(k){'use strict';var l=k===false;this.element.disabled=l;c('CSS').conditionClass(this.root,'uiTypeaheadDisabled',l);};j.prototype.reset=function(){'use strict';this.unselect();this.setValue();!this.keepFocused&&c('Input').reset(this.element);this.view.reset();this.inform('reset');};j.prototype.getElement=function(){'use strict';return this.element;};j.prototype.setExclusions=function(k){'use strict';this._exclusions=k.map(String);};j.prototype.getExclusions=function(){'use strict';return this._exclusions;};j.prototype.setValue=function(k){'use strict';this.value=this.nextQuery=k||'';c('Input').setValue(this.element,this.value);c('StickyPlaceholderInput').update(this.element);this.inform('change',k);};j.prototype.setHiddenValue=function(k){'use strict';if(typeof k==='number')k=String(k);this.hiddenInput.value=k||'';c('Arbiter').inform('Form/change',{node:this.hiddenInput});};j.prototype.getValue=function(){'use strict';return c('Input').getValue(this.element);};j.prototype.getHiddenValue=function(){'use strict';return this.hiddenInput.value||'';};j.prototype.checkValue=function(){'use strict';var k=this.getValue();if(k==this.value)return;if(this.selectedText&&this.selectedText!=k)this.unselect();var l=Date.now(),m=l-this.time;this.time=l;this.value=this.nextQuery=k;this.inform('change',this.value);this.performQuery(m);};j.prototype.performQuery=function(k){'use strict';if(this.selectedText)return;k=k||0;if(this.fetching&&k<this.queryTimeout){this.data.query(this.nextQuery,true,this._exclusions,k);}else{this.data.query(this.nextQuery,false,this._exclusions,k);this.nextQuery=null;}};j.prototype.updateHeight=function(){'use strict';};f.exports=j;}),null);
__d('TypeaheadShowLoadingIndicator',['CSS'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._subscription=this._typeahead.subscribe('loading',function(i,j){c('CSS').conditionClass(this._typeahead.getElement(),'typeaheadLoading',j.loading);c('CSS').conditionClass(this._typeahead.getView().getElement(),'typeaheadViewLoading',j.loading);}.bind(this));};h.prototype.disable=function(){'use strict';this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('legacy:ShowLoadingIndicatorTypeaheadBehavior',['TypeaheadShowLoadingIndicator'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.showLoadingIndicator=function(h){h.enableBehavior(c('TypeaheadShowLoadingIndicator'));};}),3);
__d('TypeaheadPreventSubmitOnEnter',['Event','Keys'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';var i=this._typeahead.getCore().getElement();this._listener=c('Event').listen(i,'keypress',function(j){if(c('Event').getKeyCode(j)==c('Keys').RETURN)j.kill();});};h.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};Object.assign(h.prototype,{_listener:null});f.exports=h;}),null);
__d('TypeaheadSubmitOnSelect',['FormSubmit'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._subscription=this._typeahead.subscribe('select',function(){var i=this._typeahead.getCore().getElement().form;if(i)i.getAttribute('rel')=='async'?c('FormSubmit').send(i):i.submit();}.bind(this));};h.prototype.disable=function(){'use strict';this._typeahead.unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('ErrorContextualDialogXUITheme',['cx'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={wrapperClassName:"_572t",arrowDimensions:{offset:12,length:22}};f.exports=i;}),null);