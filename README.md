# Scoundrel

## Table of Contents
1. [Team Information](#members)
2. [Game Information](#info)
3. [Rules](#rules)
4. [Development Process](#devpro)
5. [Demo Videos](#demo)

## Team Information <a name="members"></a>
Joe Daly: A math major from St Mary's college of maryland with minimal coding experience

Ian Shehedeh:

Aaron McClellan: Software Development Contractor, Graduate from the University of Dayton with a Major in Computer Information Systems

## Game Information <a name="info"></a>
Dungeon Crawl Rogue like based on the card game Scoundrel

## Rules <a name="rules"></a>

### Rules:
The 26 **Clubs** and **Spades** in the deck are known as **Monsters**. Their damage is represented by the cards ordered value. (e.g. 10 = 10, Jack = 11, Queen = 12, King = 13 and Ace = 14)

The 9 **Diamonds** in the deck are known as **Weapons**. Each weapon does as much damage as the cards listed value. All weapons in Scoundrel are Binding, meaning if you pick one up, you must equip it, and discard your previous weapon.

The 9 **Hearts** in the deck are known as **Health Potions**. You may only use one health potion each turn, even if you pull two. The second potion you pull is simply discarded. You may not restore your life beyond the starting 20 health.

The Game ends when either your life reaches 0 or you make your way through the entire **Dungeon**

### Gameplay
On every turn 4 cards will be laid out in front of you from the dungeon, these cards will make a **Room**

At the beginning of the turn you may choose to avoid the **Room**, which will take all 4 cards and place them at the bottom of the dungeon, you can do this as many times as you would like in a playthrough but you cannot avoid two **Rooms** in a row.

If you choose not to avoid the Room, one by one, you must face 3 of the four cards it contains.
Take them one at a time.

### If you chose a Weapon...
You must equip it. It will go into your weapon slot below the **Room** cards. If you already had a weapon equiped it and any monsters it had on it will be discarded. 

### If you chose a Health Potion...
It's value will be added to your life total and then discarded. Your health may not exceed 20, and you may not use
more than one Health Potion per turn. If you take two Health Potions on a single turn, the second is
simply discarded, adding nothing to your health

### If you chose a Monster...
You may either fight it barehanded or with an equipped Weapon

#### Combat
If you chose to fight a monster bearhanded, you will take the full brunt of it's value in health and then it will be discarded, if this value will put your life total at or below zero you will lose the run

If you choose to fight the monster with a weapon, you will take damage equal to the monsters value - weapon value, or weapon value - monsters health, whichever is higher, i.e if you have a 5 of diamonds and are facing a 6 clubs you would do Monster value (6) - Weapon value (5) and take 1 damage or if you have a 7 of diamonds and face a 3 of spades you would do weapon value (7) - Monster value (3) and take 0 damage 

It is important to note that although you retain your weapons until they are replaced, once a Weapon is used on a monster, the Weapon can then only be used to slay Monsters of a lower value (less than equal) than the previous Monster it had slain 
i.e Let's say you used a 5 of diamonds to fight a 9 of clubs, you would take 4 damage, then the monster is placed on your weapon. You can now only use this weapon to fight monsters of less value than 9. So if you then have to face let's say a queen of spades, 9 < 12 so you must fight the queen of spades bearhanded

Once you have chosen 3 cards (such that only one remains), your turn is complete. Leave the fourth card
face up in front of you as part of the next Room.

## Development Process <a name="devpro"></a>

## Demo Videos <a name="demo"></a>

 
