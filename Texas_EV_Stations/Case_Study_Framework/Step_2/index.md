<h1>Step 2: Calculate Available Electric Demand</h1>

---

<h2>Workflow Model</h2>

![Methodology_Step_2](https://user-images.githubusercontent.com/64942612/155171579-af2b4cc2-9879-46ad-ac9a-af71aaa6dd5e.jpg)

<p> Shown in the image above the ECDL model calculates the electrical demand (kWH) of a POI location based upon a variety of socio-economic and transportation related demographics. As such it is an iterative process and the electrical demand is calculated for each age group and POI type.</p>




---

<h2>Example</h2>


![Methodology_Step_2_Example](https://user-images.githubusercontent.com/64942612/155171599-94979e06-c9df-42ac-82b4-35a228ee99a0.jpg)

<p> In the example shown above the electrical demand of the 15-24 year (g1) Age Group and Living (p1) POI type are calculated using the ECDL formula. The result or electric demand for the Age Group and POI type are represented as E g1,p1 and are in total kilo-watt hours (kWh).</p>

---

<h2>Result</h2>


![ECDL_Model_Results](https://user-images.githubusercontent.com/64942612/155174052-afe6d8f9-7954-475d-a75f-8d709a57a0bb.jpg)

<ul>
  <li>The four columns shown here represent the available electric demand results for each POI type. The bars of the grapg are split up according to the electric demand for each individual user group.</li>
  <li>The living and working have the largest available electric demand of any POI type, while working has the smallest. In total the model determined that there was <strong>19,988,425.04 kWh of available electric demand</strong> for the Travis County, Texas area.</li>
  <li>The calculated available electric demand for each POI type is divided by number of POIs for the specific POI type. This allows the electric demand to be divided over the POI locations evenly.</li>
  <ul>
    <li><strong>Living (p1)</strong></li>
    <ul>
      <li>Total Electric Demand: 8,984,865.70 kWh</li>
      <li>Per POI Location: 17,756.65 kWh</li>
    </ul>
    <li><strong>Recreation (p2)</strong></li> 
    <ul>
      <li>Total Electric Demand: 3,219,117.38 kWh</li>
      <li>Per POI Location: 6,623.70 kWh</li>
    </ul>
    <li><strong>Shopping (p3)</strong></li>
    <ul>
      <li>Total Electric Demand: 374,208.43 kWh</li>
      <li>Per POI Location: 596.85 kWh</li>
    </ul>
    <li><strong>Working (p4)</strong></li>
    <ul>
      <li>Total Electric Demand: 7,410,233.51 kWh</li>
      <li>Per POI Location: 31005.16 kWh</li>
    </ul>
  </ul>
 </ul>
