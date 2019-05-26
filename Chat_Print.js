player.onChatCommand("print",  [ChatArgument.string2],function ({ string2: cmd }) {
    blocks.print(
    "" + cmd,
    Block.YellowConcrete,
    positions.add(
    player.position(),
    positions.create(0, 4, 0)
    ),
    CompassDirection.East
    )
})