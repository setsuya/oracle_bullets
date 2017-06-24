$(document).ready(function(){
	$(".bullet_item").hover(
		function(){
			if(!$(this).is(".bullet_item:first")){
				$(this).find(".arrows").show();
			}
		}, 
		function(){
			if(!$(this).is(".bullet_item:first")){
				$(this).find(".arrows").hide();
			}
		}
	);

	if(location.href.indexOf("?") != -1){
		position = location.href.indexOf("?");
		recreateBullet(LZString.decompressFromEncodedURIComponent(location.href.substr(position + 1)));
		$("[property=\"og:url\"]").attr("content", "http://picrossweb.url.ph/oracle_bullet/?" + location.href.substr(position + 1));
	}
});

function recreateBullet(recipe){
	share_link = $("[property=\"og:url\"]").attr("content");

	bullet_modules = recipe.match(/(.{10})/g);
	module_info = [];
	
	for(i = 0; i < bullet_modules.length; i++){
		bullet_part = []
		bullet_modules[i] = zeroPad(parseInt(bullet_modules[i], 16).toString(2), 39);
		
		bullet_part.push(bullet_modules[i].substr(0, 4));
		bullet_part.push(bullet_modules[i].substr(4, 4));
		bullet_part.push(bullet_modules[i].substr(8, 6));
		bullet_part.push(bullet_modules[i].substr(14, 6));
		bullet_part.push(bullet_modules[i].substr(20, 6));
		bullet_part.push(bullet_modules[i].substr(26, 6));
		bullet_part.push(bullet_modules[i].substr(32, 7));

		for(j = 0; j < bullet_part.length; j++){
			bullet_part[j] = parseInt(bullet_part[j], 2);
		}

		module_info.push(bullet_part);
	}

	for(i = 0; i < module_info.length; i++){
		if(module_info[i][0] == "0"){
			$(".bullet_item:eq(" + i + ")").find("div:last").removeClass().addClass("bullet_info level_" + module_info[i][0] + "").attr("onclick", null).html('<div class="nesting"></div><div class="arrows left_arrow material-icons" onclick="moveModuleLeft(this)">chevron_left</div><div class="arrows right_arrow material-icons" onclick="moveModuleRight(this)">chevron_right</div><div class="module_timing"><span><b>LOCK:</b> On button press</span></div><div class="module_effects"><img src="img/left_right.png"><span class="left_right_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/up_down.png"><span class="up_down_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/round.png"><span class="round_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span></div><div class="module_element_size" onclick="changeElementSizeList(this)"><select><option data-elem="b" data-size="ss" onclick="selectElementSize(this)">Blaze - SS</option><option data-elem="b" data-size="s" onclick="selectElementSize(this)">Blaze - S</option><option data-elem="b" data-size="m" onclick="selectElementSize(this)">Blaze - M</option><option data-elem="b" data-size="l" onclick="selectElementSize(this)">Blaze - L</option><option data-elem="b" data-size="ll" onclick="selectElementSize(this)">Blaze - LL</option><option data-elem="sp" data-size="ss" onclick="selectElementSize(this)">Spark - SS</option><option data-elem="sp" data-size="s" onclick="selectElementSize(this)">Spark - S</option><option data-elem="sp" data-size="m" onclick="selectElementSize(this)">Spark - M</option><option data-elem="sp" data-size="l" onclick="selectElementSize(this)">Spark - L</option><option data-elem="sp" data-size="ll" onclick="selectElementSize(this)">Spark - LL</option><option data-elem="f" data-size="ss" onclick="selectElementSize(this)">Freeze - SS</option><option data-elem="f" data-size="s" onclick="selectElementSize(this)">Freeze - S</option><option data-elem="f" data-size="m" onclick="selectElementSize(this)">Freeze - M</option><option data-elem="f" data-size="l" onclick="selectElementSize(this)">Freeze - L</option><option data-elem="f" data-size="ll" onclick="selectElementSize(this)">Freeze - LL</option><option data-elem="d" data-size="ss" onclick="selectElementSize(this)">Divine - SS</option><option data-elem="d" data-size="s" onclick="selectElementSize(this)">Divine - S</option><option data-elem="d" data-size="m" onclick="selectElementSize(this)">Divine - M</option><option data-elem="d" data-size="l" onclick="selectElementSize(this)">Divine - L</option><option data-elem="d" data-size="ll" onclick="selectElementSize(this)">Divine - LL</option><option data-elem="psn" data-size="ss" onclick="selectElementSize(this)">Poison - SS</option><option data-elem="psn" data-size="s" onclick="selectElementSize(this)">Poison - S</option><option data-elem="psn" data-size="m" onclick="selectElementSize(this)">Poison - M</option><option data-elem="psn" data-size="l" onclick="selectElementSize(this)">Poison - L</option><option data-elem="psn" data-size="ll" onclick="selectElementSize(this)">Poison - LL</option><option data-elem="para" data-size="ss" onclick="selectElementSize(this)">Paralysis - SS</option><option data-elem="para" data-size="s" onclick="selectElementSize(this)">Paralysis - S</option><option data-elem="para" data-size="m" onclick="selectElementSize(this)">Paralysis - M</option><option data-elem="para" data-size="l" onclick="selectElementSize(this)">Paralysis - L</option><option data-elem="para" data-size="ll" onclick="selectElementSize(this)">Paralysis - LL</option><option data-elem="heal" data-size="ss" onclick="selectElementSize(this)">Heal - SS</option><option data-elem="heal" data-size="s" onclick="selectElementSize(this)">Heal - S</option><option data-elem="heal" data-size="m" onclick="selectElementSize(this)">Heal - M</option><option data-elem="heal" data-size="l" onclick="selectElementSize(this)">Heal - L</option><option data-elem="heal" data-size="ll" onclick="selectElementSize(this)">Heal - LL</option><option data-elem="none" data-size="ss" onclick="selectElementSize(this)">None - SS</option><option data-elem="none" data-size="s" onclick="selectElementSize(this)">None - S</option><option data-elem="none" data-size="m" onclick="selectElementSize(this)">None - M</option><option data-elem="none" data-size="l" onclick="selectElementSize(this)">None - L</option><option data-elem="none" data-size="ll" onclick="selectElementSize(this)">None - LL</option></select><div class="element_icon element_blaze">B</div><div class="size_icon size_ss">SS</div></div><div class="module_type"><select><option>-- Select one --</option><option>Shot: Normal / Long</option><option>Shot: Normal / Short</option><option>Shot: Normal / Ultra-Short</option><option>Shot: Spinning Bullet / Long</option><option>Shot: Spinning Bullet / Short</option><option>Shot: Spinning Bullet / Ultra-Short</option><option>Shot: Curving / Directly in front</option><option>Shot: Curving / Medium distance away</option><option>Shot: Curving / Far away</option><option>Shot: Rotate / Normal</option><option>Shot: Rotate / Wide</option><option>Shot: Rotate / Tight</option><option>Shot: Tracking Rotation / Normal</option><option>Shot: Tracking Rotation / Wide</option><option>Shot: Tracking Rotation / Tight</option><option>Shot: Affected by gravity / Normal</option><option>Shot: Affected by gravity / Gains power with vertical distance traveled</option><option>Shot: Advanced homing / Horizontal</option><option>Shot: Advanced homing / Vertical</option><option>Shot: Advanced homing / Omnidirectional</option><option>Shot: Homing rocket / Omnidirectional homing</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet: Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Laser: Normal / Long</option><option>Laser: Normal / Short</option><option>Laser: Normal / Ultra-Short</option><option>Laser: Curving / Directly in front</option><option>Laser: Curving / Medium distance away</option><option>Laser: Curving / Far away</option><option>Laser: Rotate / Normal</option><option>Laser: Rotate / Wide</option><option>Laser: Rotate / Tight</option><option>Laser: Tracking Rotation / Normal</option><option>Laser: Tracking Rotation / Wide</option><option>Laser: Tracking Rotation / Tight</option><option>Laser: Advanced homing / Horizontal</option><option>Laser: Advanced homing / Vertical</option><option>Laser: Advanced homing / Omnidirectional</option><option>Bomb: Bomb / Normal</option><option>Bomb: Bomb / Does not hit allies</option><option>Rapid-fire bullet: Rapid-fire bullet / Normal</option><option>Sniper bullet: Sniper bullet / Normal</option><option>Sniper bullet: Lowers enemy defense on critical</option><option>Sniper bullet: Gains power with distance from firing point</option><option>Scattered rounds: Critical at melee distance / Normal</option><option>Scattered rounds: Point-blank specialized / Normal</option><option>Scattered rounds: Critical at melee range / Does not hit allies</option><option>Scattered rounds: Ignores enemy defense at point-blank range</option><option>Orb: Stop in place / Normal</option><option>Orb: Stop in place / Adds power with time</option><option>Orb: Stickies enemy / Moderate duration</option><option>Orb: Stickies enemy / Adds power with time</option><option>Orb: Stickies enemy / Ultra-long duration</option><option>Orb: Stickies enemy / Long duration</option><option>Orb: Stickies enemy / Short duration</option><option>Control: Stop in place / Moderate duration</option><option>Control: Stop in place / Ultra-long duration</option><option>Control: Stop in place / Adds power with time</option><option>Control: Stop in place / Long duration</option><option>Control: Stop in place / Short duration</option><option>Control: Track / Moderate duration</option><option>Control: Track / Short duration</option><option>Control: Faces enemy / Moderate duration</option><option>Control: Faces enemy / Ultra-long duration</option><option>Control: Faces enemy / Long duration</option><option>Control: Faces enemy / Short duration</option><option>Control: Faces up / Moderate duration</option><option>Control: Faces up / Ultra-long duration</option><option>Control: Faces up / Long duration</option><option>Control: Faces up / Short duration</option><option>Control: Faces down / Moderate duration</option><option>Control: Faces down / Ultra-long duration</option><option>Control: Faces down / Long duration</option><option>Control: Faces down / Short duration</option><option>Control: Spins in place / Moderate speed</option><option>Control: Spins in place / Low speed</option><option>Control: Spins in place / High speed</option><option>Radial: Radial / Normal</option><option>Radial: Radial / Does not hit allies</option><option>Radial: Radial (Track) / Normal</option><option>Radial: Radial (Track) / Does not hit allies</option><option>Deco-Radial: Radial / Normal</option><option>Deco-Radial: Radial (Track) / Normal</option><option>Deco-Shot: Homing rocket / Omnidirectional homing</option><option>Healing bullet: Shot / Advanced homing</option><option>Healing bullet: Shot / Heals abnormal status</option><option>Healing bullet: Shot / Strengthens attack</option><option>Healing bullet: Shot / Strengthens defense</option><option>Healing bullet: Laser / Advanced homing</option><option>Healing bullet: Laser / Heals abnormal status</option><option>Healing bullet: Laser / Strengthens attack</option><option>Healing bullet: Laser / Strengthens defense</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Large-type bomb / Normal</option><option>Healing bullet: Large-type bomb / Heals abnormal status</option></select></div>');
		}else{
			$(".bullet_item:eq(" + i + ")").find("div:last").removeClass().addClass("bullet_info level_" + module_info[i][0] + "").attr("onclick", null).html('<div class="nesting"></div><div class="arrows left_arrow material-icons" onclick="moveModuleLeft(this)">chevron_left</div><div class="arrows right_arrow material-icons" onclick="moveModuleRight(this)">chevron_right</div><div class="module_timing"><select><option>-- Select one --</option><option>With [X]</option><option>When [X] fades</option><option>When [X] hits</option><option>When [X] hits foe</option><option>When [X] hits ground</option><option>When [X] hits ground</option><option>When [X] hits ally</option><option>0.2 sec. after [X]</option><option>0.5 sec. after [X]</option><option>1 sec. after [X]</option><option>2 sec. after [X]</option><option>3 sec. after [X]</option><option>5 sec. after [X]</option><option>10 sec. after [X]</option></select></div><div class="module_effects"><img src="img/left_right.png"><span class="left_right_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/up_down.png"><span class="up_down_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/round.png"><span class="round_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span></div><div class="module_element_size" onclick="changeElementSizeList(this)"><select><option data-elem="b" data-size="ss" onclick="selectElementSize(this)">Blaze - SS</option><option data-elem="b" data-size="s" onclick="selectElementSize(this)">Blaze - S</option><option data-elem="b" data-size="m" onclick="selectElementSize(this)">Blaze - M</option><option data-elem="b" data-size="l" onclick="selectElementSize(this)">Blaze - L</option><option data-elem="b" data-size="ll" onclick="selectElementSize(this)">Blaze - LL</option><option data-elem="sp" data-size="ss" onclick="selectElementSize(this)">Spark - SS</option><option data-elem="sp" data-size="s" onclick="selectElementSize(this)">Spark - S</option><option data-elem="sp" data-size="m" onclick="selectElementSize(this)">Spark - M</option><option data-elem="sp" data-size="l" onclick="selectElementSize(this)">Spark - L</option><option data-elem="sp" data-size="ll" onclick="selectElementSize(this)">Spark - LL</option><option data-elem="f" data-size="ss" onclick="selectElementSize(this)">Freeze - SS</option><option data-elem="f" data-size="s" onclick="selectElementSize(this)">Freeze - S</option><option data-elem="f" data-size="m" onclick="selectElementSize(this)">Freeze - M</option><option data-elem="f" data-size="l" onclick="selectElementSize(this)">Freeze - L</option><option data-elem="f" data-size="ll" onclick="selectElementSize(this)">Freeze - LL</option><option data-elem="d" data-size="ss" onclick="selectElementSize(this)">Divine - SS</option><option data-elem="d" data-size="s" onclick="selectElementSize(this)">Divine - S</option><option data-elem="d" data-size="m" onclick="selectElementSize(this)">Divine - M</option><option data-elem="d" data-size="l" onclick="selectElementSize(this)">Divine - L</option><option data-elem="d" data-size="ll" onclick="selectElementSize(this)">Divine - LL</option><option data-elem="psn" data-size="ss" onclick="selectElementSize(this)">Poison - SS</option><option data-elem="psn" data-size="s" onclick="selectElementSize(this)">Poison - S</option><option data-elem="psn" data-size="m" onclick="selectElementSize(this)">Poison - M</option><option data-elem="psn" data-size="l" onclick="selectElementSize(this)">Poison - L</option><option data-elem="psn" data-size="ll" onclick="selectElementSize(this)">Poison - LL</option><option data-elem="para" data-size="ss" onclick="selectElementSize(this)">Paralysis - SS</option><option data-elem="para" data-size="s" onclick="selectElementSize(this)">Paralysis - S</option><option data-elem="para" data-size="m" onclick="selectElementSize(this)">Paralysis - M</option><option data-elem="para" data-size="l" onclick="selectElementSize(this)">Paralysis - L</option><option data-elem="para" data-size="ll" onclick="selectElementSize(this)">Paralysis - LL</option><option data-elem="heal" data-size="ss" onclick="selectElementSize(this)">Heal - SS</option><option data-elem="heal" data-size="s" onclick="selectElementSize(this)">Heal - S</option><option data-elem="heal" data-size="m" onclick="selectElementSize(this)">Heal - M</option><option data-elem="heal" data-size="l" onclick="selectElementSize(this)">Heal - L</option><option data-elem="heal" data-size="ll" onclick="selectElementSize(this)">Heal - LL</option><option data-elem="none" data-size="ss" onclick="selectElementSize(this)">None - SS</option><option data-elem="none" data-size="s" onclick="selectElementSize(this)">None - S</option><option data-elem="none" data-size="m" onclick="selectElementSize(this)">None - M</option><option data-elem="none" data-size="l" onclick="selectElementSize(this)">None - L</option><option data-elem="none" data-size="ll" onclick="selectElementSize(this)">None - LL</option></select><div class="element_icon element_blaze">B</div><div class="size_icon size_ss">SS</div></div><div class="module_type"><select><option>-- Select one --</option><option>Shot: Normal / Long</option><option>Shot: Normal / Short</option><option>Shot: Normal / Ultra-Short</option><option>Shot: Spinning Bullet / Long</option><option>Shot: Spinning Bullet / Short</option><option>Shot: Spinning Bullet / Ultra-Short</option><option>Shot: Curving / Directly in front</option><option>Shot: Curving / Medium distance away</option><option>Shot: Curving / Far away</option><option>Shot: Rotate / Normal</option><option>Shot: Rotate / Wide</option><option>Shot: Rotate / Tight</option><option>Shot: Tracking Rotation / Normal</option><option>Shot: Tracking Rotation / Wide</option><option>Shot: Tracking Rotation / Tight</option><option>Shot: Affected by gravity / Normal</option><option>Shot: Affected by gravity / Gains power with vertical distance traveled</option><option>Shot: Advanced homing / Horizontal</option><option>Shot: Advanced homing / Vertical</option><option>Shot: Advanced homing / Omnidirectional</option><option>Shot: Homing rocket / Omnidirectional homing</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet: Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Laser: Normal / Long</option><option>Laser: Normal / Short</option><option>Laser: Normal / Ultra-Short</option><option>Laser: Curving / Directly in front</option><option>Laser: Curving / Medium distance away</option><option>Laser: Curving / Far away</option><option>Laser: Rotate / Normal</option><option>Laser: Rotate / Wide</option><option>Laser: Rotate / Tight</option><option>Laser: Tracking Rotation / Normal</option><option>Laser: Tracking Rotation / Wide</option><option>Laser: Tracking Rotation / Tight</option><option>Laser: Advanced homing / Horizontal</option><option>Laser: Advanced homing / Vertical</option><option>Laser: Advanced homing / Omnidirectional</option><option>Bomb: Bomb / Normal</option><option>Bomb: Bomb / Does not hit allies</option><option>Rapid-fire bullet: Rapid-fire bullet / Normal</option><option>Sniper bullet: Sniper bullet / Normal</option><option>Sniper bullet: Lowers enemy defense on critical</option><option>Sniper bullet: Gains power with distance from firing point</option><option>Scattered rounds: Critical at melee distance / Normal</option><option>Scattered rounds: Point-blank specialized / Normal</option><option>Scattered rounds: Critical at melee range / Does not hit allies</option><option>Scattered rounds: Ignores enemy defense at point-blank range</option><option>Orb: Stop in place / Normal</option><option>Orb: Stop in place / Adds power with time</option><option>Orb: Stickies enemy / Moderate duration</option><option>Orb: Stickies enemy / Adds power with time</option><option>Orb: Stickies enemy / Ultra-long duration</option><option>Orb: Stickies enemy / Long duration</option><option>Orb: Stickies enemy / Short duration</option><option>Control: Stop in place / Moderate duration</option><option>Control: Stop in place / Ultra-long duration</option><option>Control: Stop in place / Adds power with time</option><option>Control: Stop in place / Long duration</option><option>Control: Stop in place / Short duration</option><option>Control: Track / Moderate duration</option><option>Control: Track / Short duration</option><option>Control: Faces enemy / Moderate duration</option><option>Control: Faces enemy / Ultra-long duration</option><option>Control: Faces enemy / Long duration</option><option>Control: Faces enemy / Short duration</option><option>Control: Faces up / Moderate duration</option><option>Control: Faces up / Ultra-long duration</option><option>Control: Faces up / Long duration</option><option>Control: Faces up / Short duration</option><option>Control: Faces down / Moderate duration</option><option>Control: Faces down / Ultra-long duration</option><option>Control: Faces down / Long duration</option><option>Control: Faces down / Short duration</option><option>Control: Spins in place / Moderate speed</option><option>Control: Spins in place / Low speed</option><option>Control: Spins in place / High speed</option><option>Radial: Radial / Normal</option><option>Radial: Radial / Does not hit allies</option><option>Radial: Radial (Track) / Normal</option><option>Radial: Radial (Track) / Does not hit allies</option><option>Deco-Radial: Radial / Normal</option><option>Deco-Radial: Radial (Track) / Normal</option><option>Deco-Shot: Homing rocket / Omnidirectional homing</option><option>Healing bullet: Shot / Advanced homing</option><option>Healing bullet: Shot / Heals abnormal status</option><option>Healing bullet: Shot / Strengthens attack</option><option>Healing bullet: Shot / Strengthens defense</option><option>Healing bullet: Laser / Advanced homing</option><option>Healing bullet: Laser / Heals abnormal status</option><option>Healing bullet: Laser / Strengthens attack</option><option>Healing bullet: Laser / Strengthens defense</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Large-type bomb / Normal</option><option>Healing bullet: Large-type bomb / Heals abnormal status</option></select></div>');
			changeLevel($(".bullet_item:eq(" + i + ")"), module_info[i][0]);
		}

		$(".bullet_item:eq(" + i + ") > div:last").find(".module_timing select option:eq(" + module_info[i][1] + ")").attr("selected", "");
		$(".bullet_item:eq(" + i + ") > div:last").find(".left_right_value select option:eq(" + module_info[i][2] + ")").attr("selected", "");
		$(".bullet_item:eq(" + i + ") > div:last").find(".up_down_value select option:eq(" + module_info[i][3] + ")").attr("selected", "");
		$(".bullet_item:eq(" + i + ") > div:last").find(".round_value select option:eq(" + module_info[i][4] + ")").attr("selected", "");
		$(".bullet_item:eq(" + i + ") > div:last").find(".module_element_size select option:eq(" + module_info[i][5] + ")").attr("selected", "");
		$(".bullet_item:eq(" + i + ") > div:last").find(".module_type select option:eq(" + module_info[i][6] + ")").attr("selected", "");
		
		selectElementSize2($(".bullet_item:eq(" + i + ") > div:last").find(".module_element_size select option:eq(" + module_info[i][5] + ")"));
		checkNesting($(".bullet_item:eq(" + i + ")").find(".bullet_info"));
		
		$(".bullet_info_empty:first").addClass("bullet_info_new").removeClass("bullet_info_empty").attr("onclick", "addBulletModule(this)").text("Add new module");
	}
}

function makeBullet(){
	full_recipe_string = "";

	$(".bullet_info").each(function(){
		recipe_string = "";

		level = $(this).attr("class");
		regex_result = level.match(/\d/g);
		level_number = parseInt(regex_result[0]);
		
		recipe_string += zeroPad(level_number.toString(2), 4);

		if($(this).hasClass("level_0")){
			recipe_string += "0000";
		}else{
			recipe_string += zeroPad($(this).find(".module_timing select option:selected").index().toString(2), 4);
		}

		recipe_string += zeroPad($(this).find(".left_right_value select option:selected").index().toString(2), 6);
		recipe_string += zeroPad($(this).find(".up_down_value select option:selected").index().toString(2), 6);
		recipe_string += zeroPad($(this).find(".round_value select option:selected").index().toString(2), 6);
		recipe_string += zeroPad($(this).find(".module_element_size select option:selected").index().toString(2), 6);
		recipe_string += zeroPad($(this).find(".module_type select option:selected").index().toString(2), 7);
		
		full_recipe_string += zeroPad(parseInt(recipe_string, 2).toString(16), 10)
	});

	full_recipe_string = LZString.compressToEncodedURIComponent(full_recipe_string);

	share_link = $("[property=\"og:url\"]").attr("content");
	$("[property=\"og:url\"]").attr("content", "http://picrossweb.url.ph/oracle_bullet/?" + full_recipe_string);

	$("<div id=\"overlay\"><div id=\"message\"><div id=\"bullet_link\">http://picrossweb.url.ph/oracle_bullet/?" + full_recipe_string + "</div><div id=\"close_overlay\" onclick=\"closeOverlay()\">Close</div></div></div>").appendTo("body").fadeIn("medium");
}

function closeOverlay(){
	$("#overlay").fadeOut("medium", function(){
		$(this).remove();
	});
}

function zeroPad(number, size){
	while(number.length < size){
		number = "0" + number;
	}

	return number;
}

function addBulletModule(level){
	$(level).attr("onclick", null);
	$(level).html('<div class="nesting"></div><div class="arrows left_arrow material-icons" onclick="moveModuleLeft(this)">chevron_left</div><div class="arrows right_arrow material-icons" onclick="moveModuleRight(this)">chevron_right</div><div class="module_timing"><span><b>LOCK:</b> On button press</span></div><div class="module_effects"><img src="img/left_right.png"><span class="left_right_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/up_down.png"><span class="up_down_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span><img src="img/round.png"><span class="round_value"><select><option>&plusmn; 0&deg;</option><option>+ 10&deg;</option><option>+ 20&deg;</option><option>+ 30&deg;</option><option>+ 40&deg;</option><option>+ 50&deg;</option><option>+ 60&deg;</option><option>+ 70&deg;</option><option>+ 80&deg;</option><option>+ 90&deg;</option><option>+ 100&deg;</option><option>+ 110&deg;</option><option>+ 120&deg;</option><option>+ 130&deg;</option><option>+ 140&deg;</option><option>+ 150&deg;</option><option>+ 160&deg;</option><option>+ 170&deg;</option><option>+ 180&deg;</option><option>- 170&deg;</option><option>- 160&deg;</option><option>- 150&deg;</option><option>- 140&deg;</option><option>- 130&deg;</option><option>- 120&deg;</option><option>- 110&deg;</option><option>- 100&deg;</option><option>- 90&deg;</option><option>- 80&deg;</option><option>- 70&deg;</option><option>- 60&deg;</option><option>- 50&deg;</option><option>- 40&deg;</option><option>- 30&deg;</option><option>- 20&deg;</option><option>- 10&deg;</option></select></span></div><div class="module_element_size" onclick="changeElementSizeList(this)"><select><option data-elem="b" data-size="ss" onclick="selectElementSize(this)">Blaze - SS</option><option data-elem="b" data-size="s" onclick="selectElementSize(this)">Blaze - S</option><option data-elem="b" data-size="m" onclick="selectElementSize(this)">Blaze - M</option><option data-elem="b" data-size="l" onclick="selectElementSize(this)">Blaze - L</option><option data-elem="b" data-size="ll" onclick="selectElementSize(this)">Blaze - LL</option><option data-elem="sp" data-size="ss" onclick="selectElementSize(this)">Spark - SS</option><option data-elem="sp" data-size="s" onclick="selectElementSize(this)">Spark - S</option><option data-elem="sp" data-size="m" onclick="selectElementSize(this)">Spark - M</option><option data-elem="sp" data-size="l" onclick="selectElementSize(this)">Spark - L</option><option data-elem="sp" data-size="ll" onclick="selectElementSize(this)">Spark - LL</option><option data-elem="f" data-size="ss" onclick="selectElementSize(this)">Freeze - SS</option><option data-elem="f" data-size="s" onclick="selectElementSize(this)">Freeze - S</option><option data-elem="f" data-size="m" onclick="selectElementSize(this)">Freeze - M</option><option data-elem="f" data-size="l" onclick="selectElementSize(this)">Freeze - L</option><option data-elem="f" data-size="ll" onclick="selectElementSize(this)">Freeze - LL</option><option data-elem="d" data-size="ss" onclick="selectElementSize(this)">Divine - SS</option><option data-elem="d" data-size="s" onclick="selectElementSize(this)">Divine - S</option><option data-elem="d" data-size="m" onclick="selectElementSize(this)">Divine - M</option><option data-elem="d" data-size="l" onclick="selectElementSize(this)">Divine - L</option><option data-elem="d" data-size="ll" onclick="selectElementSize(this)">Divine - LL</option><option data-elem="psn" data-size="ss" onclick="selectElementSize(this)">Poison - SS</option><option data-elem="psn" data-size="s" onclick="selectElementSize(this)">Poison - S</option><option data-elem="psn" data-size="m" onclick="selectElementSize(this)">Poison - M</option><option data-elem="psn" data-size="l" onclick="selectElementSize(this)">Poison - L</option><option data-elem="psn" data-size="ll" onclick="selectElementSize(this)">Poison - LL</option><option data-elem="para" data-size="ss" onclick="selectElementSize(this)">Paralysis - SS</option><option data-elem="para" data-size="s" onclick="selectElementSize(this)">Paralysis - S</option><option data-elem="para" data-size="m" onclick="selectElementSize(this)">Paralysis - M</option><option data-elem="para" data-size="l" onclick="selectElementSize(this)">Paralysis - L</option><option data-elem="para" data-size="ll" onclick="selectElementSize(this)">Paralysis - LL</option><option data-elem="heal" data-size="ss" onclick="selectElementSize(this)">Heal - SS</option><option data-elem="heal" data-size="s" onclick="selectElementSize(this)">Heal - S</option><option data-elem="heal" data-size="m" onclick="selectElementSize(this)">Heal - M</option><option data-elem="heal" data-size="l" onclick="selectElementSize(this)">Heal - L</option><option data-elem="heal" data-size="ll" onclick="selectElementSize(this)">Heal - LL</option><option data-elem="none" data-size="ss" onclick="selectElementSize(this)">None - SS</option><option data-elem="none" data-size="s" onclick="selectElementSize(this)">None - S</option><option data-elem="none" data-size="m" onclick="selectElementSize(this)">None - M</option><option data-elem="none" data-size="l" onclick="selectElementSize(this)">None - L</option><option data-elem="none" data-size="ll" onclick="selectElementSize(this)">None - LL</option></select><div class="element_icon element_blaze">B</div><div class="size_icon size_ss">SS</div></div><div class="module_type"><select><option>-- Select one --</option><option>Shot: Normal / Long</option><option>Shot: Normal / Short</option><option>Shot: Normal / Ultra-Short</option><option>Shot: Spinning Bullet / Long</option><option>Shot: Spinning Bullet / Short</option><option>Shot: Spinning Bullet / Ultra-Short</option><option>Shot: Curving / Directly in front</option><option>Shot: Curving / Medium distance away</option><option>Shot: Curving / Far away</option><option>Shot: Rotate / Normal</option><option>Shot: Rotate / Wide</option><option>Shot: Rotate / Tight</option><option>Shot: Tracking Rotation / Normal</option><option>Shot: Tracking Rotation / Wide</option><option>Shot: Tracking Rotation / Tight</option><option>Shot: Affected by gravity / Normal</option><option>Shot: Affected by gravity / Gains power with vertical distance traveled</option><option>Shot: Advanced homing / Horizontal</option><option>Shot: Advanced homing / Vertical</option><option>Shot: Advanced homing / Omnidirectional</option><option>Shot: Homing rocket / Omnidirectional homing</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Shot: Abnormal status bullet: Ultra-short range</option><option>Shot: Abnormal status bullet / Ultra-short range</option><option>Laser: Normal / Long</option><option>Laser: Normal / Short</option><option>Laser: Normal / Ultra-Short</option><option>Laser: Curving / Directly in front</option><option>Laser: Curving / Medium distance away</option><option>Laser: Curving / Far away</option><option>Laser: Rotate / Normal</option><option>Laser: Rotate / Wide</option><option>Laser: Rotate / Tight</option><option>Laser: Tracking Rotation / Normal</option><option>Laser: Tracking Rotation / Wide</option><option>Laser: Tracking Rotation / Tight</option><option>Laser: Advanced homing / Horizontal</option><option>Laser: Advanced homing / Vertical</option><option>Laser: Advanced homing / Omnidirectional</option><option>Bomb: Bomb / Normal</option><option>Bomb: Bomb / Does not hit allies</option><option>Rapid-fire bullet: Rapid-fire bullet / Normal</option><option>Sniper bullet: Sniper bullet / Normal</option><option>Sniper bullet: Lowers enemy defense on critical</option><option>Sniper bullet: Gains power with distance from firing point</option><option>Scattered rounds: Critical at melee distance / Normal</option><option>Scattered rounds: Point-blank specialized / Normal</option><option>Scattered rounds: Critical at melee range / Does not hit allies</option><option>Scattered rounds: Ignores enemy defense at point-blank range</option><option>Orb: Stop in place / Normal</option><option>Orb: Stop in place / Adds power with time</option><option>Orb: Stickies enemy / Moderate duration</option><option>Orb: Stickies enemy / Adds power with time</option><option>Orb: Stickies enemy / Ultra-long duration</option><option>Orb: Stickies enemy / Long duration</option><option>Orb: Stickies enemy / Short duration</option><option>Control: Stop in place / Moderate duration</option><option>Control: Stop in place / Ultra-long duration</option><option>Control: Stop in place / Adds power with time</option><option>Control: Stop in place / Long duration</option><option>Control: Stop in place / Short duration</option><option>Control: Track / Moderate duration</option><option>Control: Track / Short duration</option><option>Control: Faces enemy / Moderate duration</option><option>Control: Faces enemy / Ultra-long duration</option><option>Control: Faces enemy / Long duration</option><option>Control: Faces enemy / Short duration</option><option>Control: Faces up / Moderate duration</option><option>Control: Faces up / Ultra-long duration</option><option>Control: Faces up / Long duration</option><option>Control: Faces up / Short duration</option><option>Control: Faces down / Moderate duration</option><option>Control: Faces down / Ultra-long duration</option><option>Control: Faces down / Long duration</option><option>Control: Faces down / Short duration</option><option>Control: Spins in place / Moderate speed</option><option>Control: Spins in place / Low speed</option><option>Control: Spins in place / High speed</option><option>Radial: Radial / Normal</option><option>Radial: Radial / Does not hit allies</option><option>Radial: Radial (Track) / Normal</option><option>Radial: Radial (Track) / Does not hit allies</option><option>Deco-Radial: Radial / Normal</option><option>Deco-Radial: Radial (Track) / Normal</option><option>Deco-Shot: Homing rocket / Omnidirectional homing</option><option>Healing bullet: Shot / Advanced homing</option><option>Healing bullet: Shot / Heals abnormal status</option><option>Healing bullet: Shot / Strengthens attack</option><option>Healing bullet: Shot / Strengthens defense</option><option>Healing bullet: Laser / Advanced homing</option><option>Healing bullet: Laser / Heals abnormal status</option><option>Healing bullet: Laser / Strengthens attack</option><option>Healing bullet: Laser / Strengthens defense</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Radial / Normal</option><option>Healing bullet: Radial / Heals abnormal status</option><option>Healing bullet: Radial (Track) / Normal</option><option>Healing bullet: Radial (Track) / Heals abnormal status</option><option>Healing bullet: Large-type bomb / Normal</option><option>Healing bullet: Large-type bomb / Heals abnormal status</option></select></div>').addClass("bullet_info level_0").removeClass("bullet_info_new").parent().next(".bullet_item").find(".bullet_info_empty").addClass("bullet_info_new").removeClass("bullet_info_empty").text("Add new module").attr("onclick", "addBulletModule(this)");
}

function moveModuleLeft(module){
	if(!$(module).parent().hasClass("level_0")){
		level = $(module).parent().attr("class");
		regex_result = level.match(/\d/g);
		level_number = parseInt(regex_result[0]);
		new_level = level_number;
		new_level--;
		new_level = new_level.toString();
		old_level = level_number.toString();
		
		$(module).parent().addClass("level_" + new_level).removeClass("level_" + old_level);
		
		if($(module).parent().hasClass("level_0")){
			$(module).parent().find(".module_timing").html("<span><b>LOCK:</b> On button press</span>");
		}else{
			$(module).parent().find(".module_timing").html("<select><option>-- Select one --</option><option>With [X]</option><option>When [X] fades</option><option>When [X] hits</option><option>When [X] hits foe</option><option>When [X] hits ground</option><option>When [X] hits ground</option><option>When [X] hits ally</option><option>0.2 sec. after [X]</option><option>0.5 sec. after [X]</option><option>1 sec. after [X]</option><option>2 sec. after [X]</option><option>3 sec. after [X]</option><option>5 sec. after [X]</option><option>10 sec. after [X]</option></select>");

			changeLevel($(module).parents(".bullet_item"), new_level);
		}
	}

	checkNesting($(module).parents(".bullet_item").find(".bullet_info"));
}

function moveModuleRight(module){
	max_level = parseInt($(module).parents(".bullet_item").prev().find(".bullet_info").attr("class").match(/\d/));
	max_level++;

	this_level_class = $(module).parent().attr("class");
	this_level_value = this_level_class.match(/\d/g);

	if(this_level_value < max_level){
		level = $(module).parent().attr("class");
		regex_result = level.match(/\d/g);
		level_number = parseInt(regex_result[0]);
		new_level = level_number;
		new_level++;
		new_level = new_level.toString();
		old_level = level_number.toString();
		
		$(module).parent().addClass("level_" + new_level).removeClass("level_" + old_level);
	}

	if($(module).parent().find(".module_timing").has("select")){
		$(module).parent().find(".module_timing").html("<select><option>-- Select one --</option><option>With [X]</option><option>When [X] fades</option><option>When [X] hits</option><option>When [X] hits foe</option><option>When [X] hits ground</option><option>When [X] hits ground</option><option>When [X] hits ally</option><option>0.2 sec. after [X]</option><option>0.5 sec. after [X]</option><option>1 sec. after [X]</option><option>2 sec. after [X]</option><option>3 sec. after [X]</option><option>5 sec. after [X]</option><option>10 sec. after [X]</option></select>");

		changeLevel($(module).parents(".bullet_item"), new_level);
	}

	checkNesting($(module).parents(".bullet_item").find(".bullet_info"));
}

function checkNesting(module){
	if(!$(module).hasClass("level_0")){
		level = $(module).attr("class");
		regex_result = level.match(/\d/g);
		level_number = parseInt(regex_result[0]);
		new_level = level_number;
		new_level--;
		new_level = new_level.toString();
		offset = $(module).offset();

		$(module).parent().prevAll().each(function(){
			if($(this).find(".bullet_info").hasClass("level_" + new_level)){
				offset_parent = $(this).offset();
				
				module_distance = (offset.top - offset_parent.top) - 40;
				
				$(module).find(".nesting").css("height", module_distance + "px").show();
				
				return false;
			}
		});
	}else{
		$(module).find(".nesting").hide();
	}
}

function changeLevel(module, level){
	$(module).prevAll().each(function(){
		if($(this).find(".bullet_info").hasClass("level_" + (level - 1))){
			new_level = $(this).find(".bullet_level").text();

			$(module).find(".module_timing select option").each(function(){
				old_string = $(this).text();
				$(this).text(old_string.replace(/\[X\]/g, new_level));
			});

			return false;
		}
	});
}

function changeElementSizeList(level){
	$(level).find("select").show().attr("size", "5");
}

function selectElementSize(element_size){
	event.stopPropagation();

	elements = {
		   "b": "blaze", 
		  "sp": "spark", 
		   "f": "freeze", 
		   "d": "divine", 
		 "psn": "poison", 
		"para": "paralysis", 
		"heal": "heal", 
		"none": "none"
	};

	$(element_size).parent().siblings(".element_icon").attr("class", "element_icon element_" + elements[$(element_size).attr("data-elem")]).text($(element_size).attr("data-elem"));
	$(element_size).parent().siblings(".size_icon").attr("class", "size_icon size_" + $(element_size).attr("data-size")).text($(element_size).attr("data-size"));
	$(element_size).parent().hide();
}

function selectElementSize2(element_size){
	elements = {
		   "b": "blaze", 
		  "sp": "spark", 
		   "f": "freeze", 
		   "d": "divine", 
		 "psn": "poison", 
		"para": "paralysis", 
		"heal": "heal", 
		"none": "none"
	};

	$(element_size).parent().siblings(".element_icon").attr("class", "element_icon element_" + elements[$(element_size).attr("data-elem")]).text($(element_size).attr("data-elem"));
	$(element_size).parent().siblings(".size_icon").attr("class", "size_icon size_" + $(element_size).attr("data-size")).text($(element_size).attr("data-size"));
	$(element_size).parent().hide();
}