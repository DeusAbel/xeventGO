if (self.CavalryLogger) { CavalryLogger.start_js(["yYlyb"]); }

__d("MercuryAttachmentType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ERROR:"error",FILE:"file",PHOTO:"photo",STICKER:"sticker",SHARE:"share",UNKNOWN:"unknown",VIDEO:"video",ANIMATED_IMAGE:"animated_image",EMOJI_LIKE:"emoji_like",GIFT:"gift",THIRDPARTYSTICKER:"third_party_sticker"};}),null);
__d("PrivacyConst",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,COMPOSER_CUSTOM_INCLUSION:1067668039947624,COMPOSER_CUSTOM_EXCLUSION:1082068668536535,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},ExpansionType:{NONE:0,TAGS_ONLY:1}};}),null);
__d("InstanceProxy",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$InstanceProxy1=i;}h.prototype.getInstance=function(){"use strict";return this.$InstanceProxy1;};h.prototype.setInstance=function(i){"use strict";this.$InstanceProxy1=i;};f.exports=h;}),null);
__d('HomeRHCAdsBasicRefresh',['AdsRefreshHandler','Arbiter','NavigationMessage','Run','SubscriptionsHandler','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k;function l(){if(h){h.cleanup();h=null;}if(i){i.release();i=null;}j=null;}function m(){var p=c('ge')(k);if(p&&j){p.appendChild(j);j=null;}}function n(p,q){j=q;h&&h.forceLoadIfEnoughTimePassed(0);}var o={init:function p(q,r,s){k=q;h=new (c('AdsRefreshHandler'))(c('ge')(q),r,s).subscribeDefaultEventsForRefresh();i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,l),c('Arbiter').subscribe('ProfileQuestionAnswered',n),c('Arbiter').subscribe('AdsRefreshHandler/AdsLoaded',m));c('Run').onLeave(l);}};f.exports=o;}),null);
__d('FBProfilePhotoShadow.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l=this.props,m=l.className,n=l.children,o=babelHelpers.objectWithoutProperties(l,['className','children']),p=c('React').Children.only(n);return (c('React').createElement('div',babelHelpers['extends']({},o,{className:c('joinClasses')(m,"_38vo")}),c('React').cloneElement(p,{className:c('joinClasses')(p.props.className,"_44ma")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){!s?h(0):void 0;p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;function i(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').show(n,k);}function j(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').hide(n);}function k(){var n=c('ge')('pagelet_rhc_ticker'),o=c('DOM').scry(n,'.ticker_container')[0],p=c('DOM').scry(n,'.ticker_stream')[0],q=c('ge')('rightCol');if(!n||!o||!p||!q)return;c('Style').set(o,'height','0');var r=75,s=c('Vector').getViewportDimensions().y,t=c('Vector').getElementDimensions(q).y,u=s-t-r,v=c('Vector').getElementDimensions(p).y,w=Math.max(Math.min(u,v,h.tickerMaxHeight||425),h.tickerMinHeight||225);c('Style').set(o,'height',w+'px');}function l(n){var o=c('ge')('pagelet_reminders'),p=c('ge')('pagelet_rhc_ticker'),q=o&&c('DOM').scry(o,'div.tickerToggleWrapper')[0],r=p&&c('DOM').scry(p,'div.tickerToggleWrapper')[0];q&&c('CSS').conditionClass(q,'displayedTickerToggleWrapper',!n);r&&c('CSS').conditionClass(r,'displayedTickerToggleWrapper',n);p&&c('CSS').conditionClass(p,'hidden_rhc_ticker',!n);if(n){k();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s);}}var m={init:function n(o){h=o;var p=new (c('SubscriptionsHandler'))();if(h.enableSidebar)p.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(r,s){if(s){j();}else i();}),c('Arbiter').subscribe('minisidebar/show',i),c('Arbiter').subscribe('LitestandClassicRHC/loaded',k),c('Event').listen(window,'scroll',c('throttle')(function(){var r=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],s=c('TickerController').getInstance(r);s&&s.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){i();}else if(h.enableSidebar)j();var q=function r(){p.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,q);c('Run').onLeave(q);},initRHCTickerHider:function n(o){c('Event').listen(o,'click',this.hideRHCTicker);},showRHCTicker:function n(){l(true);},hideRHCTicker:function n(){l(false);}};f.exports=m;}),null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','ge','getScrollPosition'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=0,i=null;function j(){if(i)return;i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){m(0);k();}),c('Event').listen(window,'resize',function(){if(!c('BlueBar').hasFixedBlueBar()){m(0);k();}}),c('Event').listen(window,'scroll',function(){if(!l())k();}));c('Run').onLeave(function(){return i&&i.release();});}function k(){i.release();i=null;}function l(){if(h<=0)return false;m(c('clamp')(c('getScrollPosition')(window).y,0,h));return h>0;}function m(p){if(p===h)return;n('leftCol',p);n('rightCol',p);h=p;}function n(p,q){var r=c('ge')(p);if(r)r.style.marginTop=q?q+'px':'';}var o={adjustVerticalWindowPosition:function p(q,r){j();m(r);window.scrollTo(q.x,q.y+h);}};f.exports=o;}),null);
__d('LitestandStream',['csx','Arbiter','CSS','LitestandColumnManager','LitestandStoryInsertionStatus','Run','ViewportBounds','getElementPosition','getScrollPosition','nullthrows'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=void 0,j=void 0,k=void 0,l=void 0,m={init:function n(o,p,q,r){i=q;k=o;j=r;if(!l)l=c('Arbiter').subscribe('ufi/didUpdate',function(s,t){if(t.offsetY)c('LitestandColumnManager').adjustVerticalWindowPosition(c('getScrollPosition')(window),t.offsetY);});c('Run').onLeave(function(){l&&l.unsubscribe();l=null;});},getStoriesSelector:function n(){return "._5jmm";},getStreamRoot:function n(){return k;},getSectionID:function n(){return i;},getStoryID:function n(){return j;},isStory:function n(o){return c('CSS').matchesSelector(o,"._5jmm");},canInsertNewerStories:function n(){if(c('ViewportBounds').getTop()>c('getElementPosition')(m.getStreamRoot()).y)return false;return c('LitestandStoryInsertionStatus').canInsert();},getFeedStreamID:function n(){return parseInt(c('nullthrows')(k).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=m;}),null);
__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isSendWebrtcSupported:function i(){return c('RTCConfig').SendNewVCGK;},isReceiveWebrtcSupported:function i(){return c('RTCConfig').ReceiveNewVCGK;},isVideoInteropSupported:function i(){return c('RTCConfig').VideoInteropGK;},isVideoCallBlockingSupported:function i(){return c('RTCConfig').VideoCallBlockingGK;},isWebrtcSupported:function i(){return (c('UserAgent').isBrowser('Chrome >= 28')||c('UserAgent').isBrowser('Firefox >= 25')||c('UserAgent').isBrowser('Opera >= 20'));},isCollabSupported:function i(){return c('RTCConfig').CollabWhitelistedBrowserGK||c('UserAgent').isBrowser('Chrome >= 48');},isOSSupported:function i(){return !c('UserAgent').isPlatform('Android')&&!c('UserAgent').isPlatform('iOS');},getCapabilities:function i(){var j=0;if(this.isReceiveWebrtcSupported())j=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;return j;}};f.exports=h;}),null);
__d('MercuryAssert',['MercuryIDs'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={isParticipantID:function h(i){if(!c('MercuryIDs').isValid(i))throw 'bad_participant_id '+i;},allParticipantIDs:function h(i){i.forEach(this.isParticipantID);},isUserParticipantID:function h(i){var j=c('MercuryIDs').tokenize(i);if(j.type!='fbid')throw 'bad_user_id '+i;},isEmailParticipantID:function h(i){var j=c('MercuryIDs').tokenize(i);if(j.type!='email')throw 'bad_email_id '+i;},allThreadID:function h(i){i.forEach(this.isThreadID);},isThreadID:function h(i){if(!c('MercuryIDs').isValid(i))throw 'bad_thread_id '+i;}};}),null);
__d('MercurySingletonProvider',['CurrentUser'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i){this.$MercurySingletonProvider1={};this.$MercurySingletonProvider2=i;}h.prototype.getForFBID=function(i){if(!this.$MercurySingletonProvider1[i])this.$MercurySingletonProvider1[i]=new this.$MercurySingletonProvider2(i);return this.$MercurySingletonProvider1[i];};h.prototype.get=function(){return this.getForFBID(c('CurrentUser').getID());};h.mock=function(i){throw new Error('MercurySingletonProvider.mock() must only be used in tests.');};f.exports=h;}),null);
__d('MercuryThreadInformer',['ArbiterMixin','LogHistory','MercuryAssert','MercurySingletonProvider','mapObject','mixin'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('LogHistory').getInstance('mercury_informer');h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;k.get=function(){return l.get();};k.getForFBID=function(m){return l.getForFBID(m);};function k(m){i.constructor.call(this);this.$MercuryThreadInformer1=m;this.$MercuryThreadInformer2={};this.$MercuryThreadInformer3={};this.$MercuryThreadInformer4={};this.$MercuryThreadInformer5={};this.$MercuryThreadInformer6=false;this.$MercuryThreadInformer7=false;this.$MercuryThreadInformer8=false;this.$MercuryThreadInformer9={};this.$MercuryThreadInformer10={};this.$MercuryThreadInformer11={};this.$MercuryThreadInformer12=0;}k.prototype.updatedThread=function(m){this.$MercuryThreadInformer3[m]=true;this.$MercuryThreadInformer13();};k.prototype.invalidatedThread=function(m){this.$MercuryThreadInformer4[m]=true;this.$MercuryThreadInformer13();};k.prototype.deletedThread=function(m){this.$MercuryThreadInformer2[m]=true;this.$MercuryThreadInformer13();};k.prototype.updatedThreadlist=function(){this.$MercuryThreadInformer6=true;this.$MercuryThreadInformer13();};k.prototype.updatedUnseenState=function(){this.$MercuryThreadInformer7=true;this.$MercuryThreadInformer13();};k.prototype.updatedUnreadState=function(){this.$MercuryThreadInformer8=true;this.$MercuryThreadInformer13();};k.prototype.changedThreadReadState=function(m,n,o){if(!this.$MercuryThreadInformer5[m]||this.$MercuryThreadInformer5[m].timestamp<o)this.$MercuryThreadInformer5[m]={mark_as_read:n,timestamp:o};this.$MercuryThreadInformer13();};k.prototype.receivedMessage=function(m){c('MercuryAssert').isThreadID(m.thread_id);var n=m.thread_id;if(!this.$MercuryThreadInformer9[n])this.$MercuryThreadInformer9[n]=[];this.$MercuryThreadInformer9[n].push(m);this.updatedThread(n);};k.prototype.reorderedMessages=function(m,n){this.$MercuryThreadInformer10[m]={source:n};this.$MercuryThreadInformer13();};k.prototype.updatedMessage=function(m,n,o){if(!this.$MercuryThreadInformer11[m])this.$MercuryThreadInformer11[m]={};this.$MercuryThreadInformer11[m][n]={source:o};this.updatedThread(m);};k.prototype.synchronizeInforms=function(m){this.$MercuryThreadInformer12++;try{m();}catch(n){throw n;}finally{this.$MercuryThreadInformer12--;this.$MercuryThreadInformer13();}};k.prototype.listen=function(m,n){return this.subscribe('threads-updated',function(o,p){if(p[m])n(m);});};k.prototype.$MercuryThreadInformer13=function(){if(!this.$MercuryThreadInformer12){var m=this.$MercuryThreadInformer2,n=this.$MercuryThreadInformer3,o=this.$MercuryThreadInformer4,p=this.$MercuryThreadInformer5,q=this.$MercuryThreadInformer6,r=this.$MercuryThreadInformer7,s=this.$MercuryThreadInformer8,t=this.$MercuryThreadInformer9,u=this.$MercuryThreadInformer10,v=this.$MercuryThreadInformer11;this.$MercuryThreadInformer2={};this.$MercuryThreadInformer3={};this.$MercuryThreadInformer4={};this.$MercuryThreadInformer5={};this.$MercuryThreadInformer6=false;this.$MercuryThreadInformer7=false;this.$MercuryThreadInformer8=false;this.$MercuryThreadInformer9={};this.$MercuryThreadInformer10={};this.$MercuryThreadInformer11={};var w=Object.keys(n);if(w.length||q)this.inform('threadlist-updated',w);if(w.length)this.$MercuryThreadInformer14('threads-updated',n);for(var x in o){this.$MercuryThreadInformer14('thread-invalidated',o);break;}for(var x in p){this.$MercuryThreadInformer14('thread-read-changed',p);break;}for(x in m){this.$MercuryThreadInformer14('threads-deleted',m);break;}if(r)this.$MercuryThreadInformer14('unseen-updated',null);if(s)this.$MercuryThreadInformer14('unread-updated',null);for(x in t){this.$MercuryThreadInformer14('messages-received',t);break;}for(x in u){this.$MercuryThreadInformer14('messages-reordered',u);break;}for(x in v){this.$MercuryThreadInformer14('messages-updated',v);break;}}};k.prototype.$MercuryThreadInformer14=function(m,n){j.debug(m,'{}');this.inform(m,n);};var l=new (c('MercurySingletonProvider'))(k);f.exports=k;}),null);
__d("CSSClassTransition",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){}Object.assign(i,{go:function j(k,l,m,n){var o;for(var p=0;p<h.length;p++)if(h[p](k,l,m,n)===true)o=true;if(!o)k.className=l;},registerHandler:function j(k){h.push(k);return {remove:function l(){var m=h.indexOf(k);if(m>=0)h.splice(m,1);}};}});f.exports=i;}),null);
__d('FBID',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={isUser:function i(j){return j<2.2e+09||j>=1e+14&&j<=100099999989999||j>=8.9e+13&&j<=89999999999999||j>=6.000001e+13&&j<=60000019999999;}};f.exports=h;}),null);
__d('PopoverAsyncMenu',['Bootloader','Event','KeyStatus','PopoverMenu','VirtualCursorStatus','setImmediate'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j={},k=0;h=babelHelpers.inherits(l,c('PopoverMenu'));i=h&&h.prototype;function l(m,n,o,p,q,r){'use strict';i.constructor.call(this,m,n,null,q);this._endpoint=p;this._endpointData=r||{};this._loadingMenu=o;this._instanceId=k++;j[this._instanceId]=this;this._mouseoverListener=c('Event').listen(n,'mouseover',this.fetchMenu.bind(this));}l.prototype._onLayerInit=function(){'use strict';if(!this._menu&&this._loadingMenu)this.setMenu(this._loadingMenu);this._popover.getLayer().subscribe('key',this._handleKeyEvent.bind(this));this._triggerInfo={isKeyDown:c('KeyStatus').isKeyDown(),isVirtualCursorTriggered:c('VirtualCursorStatus').isVirtualCursorTriggered()};c('setImmediate')(function(){return this.fetchMenu();}.bind(this));};l.prototype._onPopoverHide=function(){'use strict';i._onPopoverHide.call(this);this._triggerInfo=null;};l.prototype.fetchMenu=function(){'use strict';if(this._fetched)return;c('Bootloader').loadModules(["AsyncRequest"],function(m){new m().setURI(this._endpoint).setData(Object.assign({pmid:this._instanceId},this._endpointData)).send();}.bind(this),'PopoverAsyncMenu');this._fetched=true;if(this._mouseoverListener){this._mouseoverListener.remove();this._mouseoverListener=null;}};l.prototype._setFocus=function(m){'use strict';var n=this._triggerInfo||{},o=n.isKeyDown,p=n.isVirtualCursorTriggered;this.setInitialFocus(m,o||p);this._triggerInfo=null;};l.setMenu=function(m,n){'use strict';var o=j[m];o.setMenu(n);o._setFocus(n);};l.getInstance=function(m){'use strict';return j[m];};l.getInstanceByTriggerElem=function(m){'use strict';var n=null;Object.keys(j).forEach(function(o){if(j[o]._triggerElem==m)n=j[o];});return n;};f.exports=l;}),null);
__d('PrivacySelectorNewDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='selector',i=Object.assign(new (c('Dispatcher_DEPRECATED'))(),{handleUpdateFromSelector:function j(k){this.dispatch(babelHelpers['extends']({payloadSource:h},k));}});f.exports=i;}),null);
__d('PopoverLoadingMenu',['cx','BehaviorsMixin','DOM','PopoverMenuInterface','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('PopoverMenuInterface'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this);this._config=l||{};this._theme=l.theme||{};}k.prototype.getRoot=function(){'use strict';if(!this._root){this._root=c('DOM').create('div',{className:c('joinClasses')("_54nq",this._config.className,this._theme.className)},c('DOM').create('div',{className:"_54ng"},c('DOM').create('div',{className:"_54nf _54af"},c('DOM').create('span',{className:"_54ag"}))));if(this._config.behaviors)this.enableBehaviors(this._config.behaviors);}return this._root;};Object.assign(k.prototype,c('BehaviorsMixin'),{_root:null});f.exports=k;}),null);
__d('XUIBadge',['cx','invariant','CSS','DOM'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){return parseInt(l,10)===l;}function k(l){'use strict';this.target=l.target;this.count=l.count;this.maxcount=l.maxcount;}k.prototype.getCount=function(){'use strict';return this.count;};k.prototype.setCount=function(l){'use strict';!j(l)?i(0):void 0;!(l>=0)?i(0):void 0;this.count=l;c('CSS').conditionClass(this.target,'hidden_elem',this.count===0);if(l>this.maxcount){c('DOM').setContent(this.target,this.maxcount+'+');c('CSS').addClass(this.target,"_5ugi");}else{c('DOM').setContent(this.target,l);c('CSS').removeClass(this.target,"_5ugi");}};k.prototype.setLegacyContent=function(l){'use strict';if(typeof l==='string'){c('CSS').conditionClass(this.target,'hidden_elem',l==0);c('DOM').setContent(this.target,l);c('CSS').removeClass(this.target,"_5ugi");}else this.setCount(l);};k.prototype.increment=function(){'use strict';this.setCount(this.getCount()+1);};f.exports=k;}),null);
__d("arrayStableSort",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return (this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j)));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;}),null);
__d("XPrivacyCustomDialogController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},__asyncDialog:{type:"Int"}});}),null);