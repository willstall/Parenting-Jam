//OSCILLATE SCALE
/*
using UnityEngine;
using System.Collections;

public class OscillateScale : MonoBehaviour
{
    
    public float frequency = 2;
    public Vector3 amplitude = Vector3.one; 
    public bool randomOffset;   
    

    float offset;

    Vector3 lastOffset;

    void Start()
    {
        offset = 0.0f;
        if(randomOffset)
            offset = Random.Range(0,10000);
    }
        
    void Update ()
    {
        var thisOffset = Mathf.Sin( (Time.time + offset) * frequency ) * amplitude;
        transform.localScale += thisOffset - lastOffset;
        lastOffset = thisOffset;
    }
}
*/

function OscillateScale(){}
var p = createjs.extend( OscillateScale, Component );

p.OnAdd = function()
{
  this.frequency = 2;
  this.xScaleAmplitude = 1;
  this.yScaleAmplitude = 1;  
  this.randomOffset = false;
  this.offset = 0;
  
  if(randomOffset)
    offset = Mathf.random() * 10000;
}

p.OnUpdate = function()
{
//=  var currentOffset = Mathf.sin(  (Time.time + offset) * frequency ) * amplitude;
//  this.scaleX = 
}

// OSCILLATE COMPONENT - TEST
function OscillateComponent(){}

var p = createjs.extend( OscillateComponent, Component );

p.OnAdd = function()
{
	this.originX = this.parent.x;
	this.counter = 0;
	this.increment = .1;
	this.amplitude = 50;	
}

p.OnUpdate = function()
{
	this.parent.x = this.originX + Math.sin( this.counter ) * this.amplitude;
	this.counter += this.increment;
}

// BASE COMPONENT ARCHITECTURE
function Component(){}
Component.prototype.OnAdd = function(){}
Component.prototype.OnRemove = function(){}
Component.prototype.OnEarlyUpdate = function(){}
Component.prototype.OnUpdate = function(){}
Component.prototype.OnLateUpdate = function(){}

/*

Component.prototype.OnAdd = function()
{
	console.log("This:" + this + "Added");
}
Component.prototype.OnRemove = function()
{
	console.log("This:" + this + "Removed");
}
Component.prototype.OnEarlyUpdate = function()
{
	console.log("This:" + this + "Early Update");
}
Component.prototype.OnUpdate = function()
{
	console.log("This:" + this + "Update");
}
Component.prototype.OnLateUpdate = function()
{
	console.log("This:" + this + "Late Update");
}

*/