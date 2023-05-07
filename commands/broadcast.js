
module.exports = {
    name: 'بث',
    category: 'owner',
    desc: 'Sends AIZEL userbot group link.',
    async exec(citel, Void,args,isCreator) {
      if(!isCreator) return citel.reply(tlang().owner)
      if(!args[0]) return citel.reply('_وشتبي تبث._')
        let getGroups = await Void.groupFetchAllParticipating();
			let groups = Object.entries(getGroups)
				.slice(0)
				.map((entry) => entry[1]);
			let anu = groups.map((v) => v.id);
			citel.reply(`نشر البث في ${anu.length} قروب, خلص الوقت ${
              anu.length * 1.5
            } second`);
			for (let i of anu) {
				await sleep(1500);
				let txt = `*--❗${tlang().title} بث❗--*\n\n *🍀المرسل:* ${citel.pushName}\n\n${args.join(" ")}`;
				Void.send5ButImg(i, txt, Void.user.name,log0);
			}
			citel.reply(`*تم البث في ${anu.length} قروب(ات)*`);
    }
 }
