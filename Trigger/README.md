# Triggers

```apex
trigger TriggerName on ObjectName (trigger_events) {
   code_block
}
```

where trigger_events can be a comma-separated list of one or more of the following events:
* before insert
* before update
* before delete
* after insert
* after update
* after delete
* after undelete

