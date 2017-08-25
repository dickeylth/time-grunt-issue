`time-grunt` callback issue.

### using `CTRL + C` force exit:

```
~/dev/gitlab/grunt-test grunt
Running "test" task
>> test...
^C

Execution Time (2017-08-25 09:44:56 UTC+8)
loading tasks   15ms  ▇▇▇▇▇▇ 4%
test           373ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 96%
Total 389ms

[ [ 'loading tasks', 15 ], [ 'test', 373 ] ]
```

### normal exit:

```
~/dev/gitlab/grunt-test grunt
Running "test" task
>> test...
>> test task done.

Done.


Execution Time (2017-08-25 09:44:58 UTC+8)
loading tasks   15ms  ▇▇▇▇▇▇▇ 5%
test           314ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 95%
Total 330ms
```

## sys info

- MacOS Serria 10.12.6 (16G29)

```
~/dev/gitlab/grunt-test(master ✗) tnpm -v
tnpm@2.28.2 (/usr/local/lib/node_modules/tnpm/bin/tnpm)
npm@2.15.12 (/usr/local/lib/node_modules/tnpm/node_modules/npm/lib/npm.js)
node@6.10.3 (/usr/local/bin/node)
npminstall@2.30.2 (/usr/local/lib/node_modules/tnpm/node_modules/npminstall/lib/index.js)
prefix=/usr/local (load prefix from: $ npm config get prefix)
darwin x64 16.7.0
```