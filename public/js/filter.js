
    var allFiltered = true;
    var committeeFiltered = true;
    var squadLFiltered = true;
    var coachesFiltered = true;

    function unfilterCoaches() {
        if (coachesFiltered) {
            $('.coach').css('display', 'none');
            coachesFiltered = false;
        }
        return;
    }

    function unfilterCommittee() {
        if (committeeFiltered) {
            $('.committeeMember').css('display', 'none');
            committeeFiltered = false;
        }
        return;
    }

    function unfilterSquadL() {
        if (squadLFiltered) {
            $('.squadLeader').css('display', 'none');
            squadLFiltered = false;
        }
        return;
    }

    function filterCoachesHelper() {
        if (!coachesFiltered) {
            $('.coach').css('display', 'inline-block');
            coachesFiltered = true;
        }
    }

    function filterCommitteeHelper() {
        $('.committeeMember').css('display', 'inline-block');
        committeeFiltered = true;           
    }

    function filterSquadLHelper() {
        $('.squadLeader').css('display', 'inline-block');
        squadLFiltered = true;    
    }
    function filterAll() {
        if (allFiltered) {
            return;
        } else {
            filterCommitteeHelper();
            filterSquadLHelper();
            filterCoachesHelper
            allFiltered = true;
        }
    }

    function filterCommittee() {
        unfilterSquadL();
        unfilterCoaches();
        filterCommitteeHelper();
        allFiltered = false;
    }

    function filterSquadL() {
        unfilterCommittee();
        unfilterCoaches();
        filterSquadLHelper();
        allFiltered = false;
    }

    function filterCoaches() {
        unfilterCommittee();
        unfilterSquadL();
        filterCoachesHelper();
        allFiltered = false;
    }

