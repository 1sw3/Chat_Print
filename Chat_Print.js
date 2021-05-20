player.onChatCommand("print",  [ChatArgument.string2],function ({ string2: argument }) {
    blocks.print(
    "" + argument,
    Block.YellowConcrete,
    positions.add(
    player.position(),
    positions.create(-argument.length*3^2/2, 0, -8) /** 置中算法=字符串长度x符号块实际间隔长度x符号块平均长度（非精准） 
    Text_Block Centre adjustment algorithm **/  
    ),
    CompassDirection.East
    )
})
