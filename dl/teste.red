Red []
#macro ['loop [integer! | block!] block!] function [[manual] s e][
    set [spec body] next s
    if integer? spec [return e]    ;-- return position past the pattern
    low: high: none
    step: 1

unless parse spec [
    word! 
    opt '= set low integer!
    opt [opt 'to set high integer!]
    opt [opt 'step set step integer!]
    ][
    print ["*** LOOP syntax error:" spec]
]
new: reduce either high [
    set-var: to-set-word var: spec/1
    cond: compose [(var) <= (high)]
    repend body [set-var var '+ step]
    [set-var low 'while cond body]
    ][
    ['repeat spec/1 low body]
]      
change/part s new e
]

loop 2 [print "x"]
loop [i 3][print i]
loop [i 5 8][print i]
loop [i = 5 to 10 step 2][print i]
