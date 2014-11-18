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

### Some notes
The css included isn't important, as the reason I made this was becasue I came across too many plugins that come with hardcoded styling which is not great when you don't need them. However I've included a couple useful things, one being to scroll the contents of the popup no the entire screen. But also to lock the page in place to avoid it scrolling. These things may be simple but in a lot of cases make a world of a difference.
