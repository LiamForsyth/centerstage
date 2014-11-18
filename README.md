CenterStage
===========

A barebones jQuery popup
------------------------

### Hook up the HTML

The ID of the stage should combine the `data-stage` of your button and the suffix of stage. So `data-stage="foo"` should have a stage with `id="foostage"`.

```
<button data-stage="test">View Popup</button>

<div id="backstage"></div>
<div id="teststage" class="stage">...</div>
```

### Hook up the jQuery

```
$('button[data-stage]').centerStage();
```
