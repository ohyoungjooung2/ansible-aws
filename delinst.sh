#!/usr/bin/env bash
ansible-playbook del_wininsta.yaml -e "INSTID=$1"

