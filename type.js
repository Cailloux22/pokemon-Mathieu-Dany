class Type{
    static all_types=[];
    constructor(_name,_type){

            this.name=_name;
            this.Bug=_type['Bug'];
            this.Dark=_type['Dark'];
            this.Dragon=_type['Dragon'];
            this.Electric=_type['Electric'];
            this.Fairy=_type['Fairy'];
            this.Fighting=_type['Fighting'];
            this.Fire=_type['Fire'];
            this.Flying=_type['Flying'];
            this.Ghost=_type['Ghost'];
            this.Grass=_type['Grass'];
            this.Ground=_type['Ground'];
            this.Ice=_type['Ice'];
            this.Normal=_type['Normal'];
            this.Poison=_type['Poison'];
            this.Psychic=_type['Psychic'];
            this.Rock=_type['Rock'];
            this.Steel=_type['Steel'];
            this.Water=_type['Water'];
        }
    toString(){
        return (
            this.name+"\n"+this.Bug+"\n"+
        this.Dark+"\n"+
        this.Dragon+"\n"+
        this.Electric+"\n"+
        this.Fairy+"\n"+
        this.Fighting+"\n"+
        this.Fire+"\n"+
        this.Flying+"\n"+
        this.Ghost+"\n"+
        this.Grass+"\n"+
        this.Ground+"\n"+
        this.Ice+"\n"+
        this.Normal+"\n"+
        this.Poison+"\n"+
        this.Psychic+"\n"+
        this.Rock+"\n"+
        this.Steel+"\n"+
        this.Water+"\n");
    }
}