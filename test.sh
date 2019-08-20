#!/bin/sh

yoda-cli am force-stop 'alarm'
yoda-cli pm install .
yoda-cli am instrument 'alarm' 'test/*.test.js'
yoda-cli am logread 'alarm'
