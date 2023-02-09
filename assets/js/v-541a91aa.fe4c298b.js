"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64625],{236625:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-541a91aa","path":"/devices/TS0601_din_2.html","title":"TuYa TS0601_din_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_din_2 control via MQTT","description":"Integrate your TuYa TS0601_din_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-12-01T15:07:19.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Fault (enum)","slug":"fault-enum","link":"#fault-enum","children":[]},{"level":3,"title":"Threshold_1 (enum)","slug":"threshold-1-enum","link":"#threshold-1-enum","children":[]},{"level":3,"title":"Threshold_1_protection (binary)","slug":"threshold-1-protection-binary","link":"#threshold-1-protection-binary","children":[]},{"level":3,"title":"Threshold_1_value (numeric)","slug":"threshold-1-value-numeric","link":"#threshold-1-value-numeric","children":[]},{"level":3,"title":"Threshold_2 (enum)","slug":"threshold-2-enum","link":"#threshold-2-enum","children":[]},{"level":3,"title":"Threshold_2_protection (binary)","slug":"threshold-2-protection-binary","link":"#threshold-2-protection-binary","children":[]},{"level":3,"title":"Threshold_2_value (numeric)","slug":"threshold-2-value-numeric","link":"#threshold-2-value-numeric","children":[]},{"level":3,"title":"Clear_fault (binary)","slug":"clear-fault-binary","link":"#clear-fault-binary","children":[]},{"level":3,"title":"Meter_id (text)","slug":"meter-id-text","link":"#meter-id-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1675960131000},"filePathRelative":"devices/TS0601_din_2.md"}')},241915:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var r=o(166252);const i=(0,r._)("h1",{id:"tuya-ts0601-din-2",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#tuya-ts0601-din-2","aria-hidden":"true"},"#"),(0,r.Uk)(" TuYa TS0601_din_2")],-1),d=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"TS0601_din_2")],-1),a=(0,r._)("td",null,"Vendor",-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"Zigbee DIN energy meter")],-1),h=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"switch (state), energy, power, voltage, current, fault, threshold_1, threshold_1_protection, threshold_1_value, threshold_2, threshold_2_protection, threshold_2_value, clear_fault, meter_id, linkquality")],-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_din_2.jpg",alt:"TuYa TS0601_din_2"})])],-1),s=(0,r._)("tr",null,[(0,r._)("td",null,"White-label"),(0,r._)("td",null,"XOCA DAC2161C")],-1),u=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),p=(0,r.uE)('<ul><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum" aria-hidden="true">#</a> Fault (enum)</h3><p>Fault status of the device (clear = nothing). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>clear</code>, <code>over_current_threshold</code>, <code>over_power_threshold</code>, <code>over_voltage threshold</code>, <code>wrong_frequency_threshold</code>.</p><h3 id="threshold-1-enum" tabindex="-1"><a class="header-anchor" href="#threshold-1-enum" aria-hidden="true">#</a> Threshold_1 (enum)</h3><p>State of threshold_1. Value can be found in the published state on the <code>threshold_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-1-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-1-protection-binary" aria-hidden="true">#</a> Threshold_1_protection (binary)</h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_1_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold_1_protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-1-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-1-value-numeric" aria-hidden="true">#</a> Threshold_1_value (numeric)</h3><p>Can be in Volt or Ampere depending on threshold setting. Setup the value on the device. Value can be found in the published state on the <code>threshold_1_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="threshold-2-enum" tabindex="-1"><a class="header-anchor" href="#threshold-2-enum" aria-hidden="true">#</a> Threshold_2 (enum)</h3><p>State of threshold_2. Value can be found in the published state on the <code>threshold_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_set</code>, <code>over_current_threshold</code>, <code>over_voltage_threshold</code>.</p><h3 id="threshold-2-protection-binary" tabindex="-1"><a class="header-anchor" href="#threshold-2-protection-binary" aria-hidden="true">#</a> Threshold_2_protection (binary)</h3><p>OFF - alarm only, ON - relay will be off when threshold reached. Value can be found in the published state on the <code>threshold_2_protection</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>ON</code> threshold_2_protection is ON, if <code>OFF</code> OFF.</p><h3 id="threshold-2-value-numeric" tabindex="-1"><a class="header-anchor" href="#threshold-2-value-numeric" aria-hidden="true">#</a> Threshold_2_value (numeric)</h3><p>Setup value on the device. Value can be found in the published state on the <code>threshold_2_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="clear-fault-binary" tabindex="-1"><a class="header-anchor" href="#clear-fault-binary" aria-hidden="true">#</a> Clear_fault (binary)</h3><p>Turn ON to clear last the fault. Value can be found in the published state on the <code>clear_fault</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_fault&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> clear_fault is ON, if <code>OFF</code> OFF.</p><h3 id="meter-id-text" tabindex="-1"><a class="header-anchor" href="#meter-id-text" aria-hidden="true">#</a> Meter_id (text)</h3><p>Meter ID (ID of device). Value can be found in the published state on the <code>meter_id</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),_={},v=(0,o(983744).Z)(_,[["render",function(e,t){const o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),i,(0,r._)("table",null,[d,(0,r._)("tbody",null,[l,(0,r._)("tr",null,[a,(0,r._)("td",null,[(0,r.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,r.w5)((()=>[(0,r.Uk)("TuYa")])),_:1})])]),n,h,c,s])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,r.kq)(" Notes END: Do not edit below this line "),u,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[(0,r.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);