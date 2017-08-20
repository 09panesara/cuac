
    var allFiltered = true;
    var committeeFiltered = true;
    var squadLFiltered = true;
    var coachesFiltered = true;

    function unfilterCoaches() {
        if (coachesFiltered) {
            $('.coaches').css('display', 'none');
            coachesFiltered = false;
        }
        return;
    }

    function unfilterCommittee() {
        if (committeeFiltered) {
            $('.committee').css('display', 'none');
            committeeFiltered = false;
        }
        return;
    }

    function unfilterSquadL() {
        if (squadLFiltered) {
            $('.squadL').css('display', 'none');
            squadLFiltered = false;
        }
        return;
    }

    function filterCoachesHelper() {
        if (!coachesFiltered) {
            $('.coaches').css('display', 'inline-block');
            coachesFiltered = true;
        }
    }

    function filterCommitteeHelper() {
        $('.committee').css('display', 'inline-block');
        committeeFiltered = true;           
    }

    function filterSquadLHelper() {
        $('.squadL').css('display', 'inline-block');
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

